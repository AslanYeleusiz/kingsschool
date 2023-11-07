<?php

namespace App\Services\V1\Olimpiada\v2;

use Illuminate\Support\Facades\Storage;
use App\Models\OlimpiadaBagyty;
use App\Models\OlimpiadaTury;
use App\Models\OlimpiadaKatysu;
use App\Models\OlimpiadaTizim;
use App\Models\OlimpiadaTurnir;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use DateTime;

class OlimpCertGenerateService
{
    public function getDiplom($o_order_id, $diplom){
        $o_tizim = OlimpiadaTizim::where('o_order_id', $o_order_id)->first();
        $o_katysu = OlimpiadaKatysu::with(['o_bagyt', 'o_tury', 'o_zhetekshi'])
            ->where('o_order_id', $o_order_id)
            ->first();

        $o_katysushy_idd = $o_katysu->o_katysushy_idd;
        $dir_cert_path = public_path(OlimpiadaTizim::CERTIFICATE_PATH);
        $font_dir = public_path('/fonts');

        $olimpname = $o_katysu['o_bagyt']->o_bagyty;
        $username = $o_tizim->katysushy_name;
        $work = $o_katysu->o_mekeme;

        $kun = $o_katysu->o_date;
        $datetime = new DateTime($kun);
        $year = $datetime->format('Y');
        $month = $datetime->format('m');
        $day = $datetime->format('j');
        $month = $this->getMonth($month);  
        

        $date_true = $day.' '.$month.' '.$year.' жыл';
        $date = $o_katysu->o_date;
        $id = $o_katysu->idd;
        $ln = strlen($id);
        $z = '';
        for($i = $ln; $i<5;$i++) $z .= '0';
        $id = $z.$id;
        $numb = 'OL-'.$id;
        
        $top_qr = 2752;                 // Отступ сверху для QR
        $left_qr = 300;                 // Отступ слева для QR
        $top_id = 2976;                 // Отступ сверху для Доп.текста
        $left_id = 625;                 // Отступ слева для Доп.текста
        $px = 3/4;

        $folder_num = $this->getTypeKatysu($o_katysushy_idd);
        $img_name = $id."-ustdip.jpg";
        $center = 1312.5;
        switch ($diplom) {
            case '1':
                $img = $dir_cert_path."/ol/new/".$folder_num."/dip_1.jpg";
                break;
            case '2':
                $img = $dir_cert_path."/ol/new/".$folder_num."/dip_2.jpg";
                break;
            case '3':
                $img = $dir_cert_path."/ol/new/".$folder_num."/dip_3.jpg";
                break;
            default:
                $img = $dir_cert_path."/ol/new/".$folder_num."/dip_1.jpg";
                break;
        }
        
        $pic = ImageCreateFromjpeg($img);
        Header("Content-type: image/jpeg");
        
        
        
        /* ------------------------- OPTIONS -------------------------------  */
        $c_black = ImageColorAllocate($pic, 0, 0, 0);
        $c_white = ImageColorAllocate($pic, 251, 252, 252);
        $font_atyp = $font_dir.'/AtypText-Regular.ttf';
        $font_atypDisplay = $font_dir.'/AtypDisplay-Bold.ttf';
        $font_m = $font_dir.'/marta/Marta_Regular.otf';
        
        $icon_path = $dir_cert_path."/ol/new/icons/";

        $info = '«'.$this->mb_ucfirst($month).'» айында '.$olimpname.'ның жеңімпазы';
//        $work = 'Алматы облысы, Қарасай ауданы, Қарасай ауданы,';
        $end = 'марапатталады';
        $desc = [
            'Тіркеу номері: '.$numb,
            'Уақыты: '.$date_true
        ];
        $qr_desc = [
            'құжаттың заңдылығын',
            'осы qr-кодты сканерлеу',
            'арқылы тексеруге болады'
        ];
        $text = [
            'Пәні: '.$o_katysu->o_bagyt->bagyt.', '.$o_katysu->o_tury->synyp.' сынып'
        ];
        if($o_katysu->o_zhetekshi_id){
            array_unshift($text, "Жетекшісі: ".$o_katysu->o_zhetekshi->name);
        }
        
        
        $h_info = 1400;
        $width = 2625;
        $margin = 300;
        
        /* --------------------------------------------------------  */
        
        
        
        /* ----------- КОД -----------------  */
        $code_left = 1510;
        $font_size_code = 80;
        $code_top = 1219;
        if($folder_num == 2) {
            $box = imagettfbbox(80*$px, 0, $font_atyp, $numb);
            $code_left = $center-round(($box[2]-$box[0])/2);
            $font_size_code = 70;
            $code_top = 1000;
            $h_info = 1250;
        }
        ImageTTFtext($pic, 80*$px, 0, $code_left, $code_top, $c_black, $font_atyp, $numb);
        /* ----------------------------  */
        
        
        
        
        /* ------- DESCRIPTION -------- */
        $h_info = $h_info + 70;
        $h_info = $this->setText($pic, $info, 80*$px,$font_atyp,$width, $center, $margin, $h_info, $c_black );
        
        /* ---------------------------- */
        
        
        
        /* ------- FIO --------*/
        $f_size = 160*$px;
        $w_limit_name = 1800;
        $box = imagettfbbox($f_size, 0, $font_m, $username);
        while ($box[2] > $w_limit_name) {
            $f_size--;
            $box = imagettfbbox($f_size, 0, $font_m, $username);
        }
        $left = $center-round(($box[2]-$box[0])/2);
        $h_info += 50 + $f_size;
        ImageTTFtext($pic, $f_size, 0, $left, $h_info, $c_black, $font_m, $username);
        /* ----------------------------  */
        
        
        
        
        /* ------------ imageline ----------------  */
        $h_info += 60;
        imageline($pic, 315, $h_info, $width-315, $h_info, $c_black);
        /* ----------------------------  */
        
        
        
        
        /* --------------- ending -------------  */
        $h_info += 100;
        $box2 = imagettfbbox(53.32, 0, $font_atyp, 'марапатталады');
        $left2 = $center-round(($box2[2]-$box2[0])/2);
        ImageTTFtext($pic, 53.32, 0, $left2, $h_info, $c_black, $font_atyp, 'марапатталады');
        /* ----------------------------  */
        
        
        
        
        
        /* ----------- work -----------------  */
        if($o_katysushy_idd != 3){
            if($work){
                $h_info += 40;
                $h_info = $this->setText($pic, $work, 80*$px,$font_atyp,$width, $center, $margin, $h_info, $c_black );
            }
        } else {
            $h_info += 140;
            $this->setAtters($pic, $text, 70*$px, 680, $h_info, $c_black, $icon_path, $font_atyp);
        }
        
        /* ----------------------------------  */
        
        
        
        
        /* ----------- footer content -----------------  */
        ImageTTFtext($pic, 40*$px, 0, $left_id, $top_id+40, $c_black, $font_atyp, $desc[0]);
        ImageTTFtext($pic, 40*$px, 0, $left_id, $top_id+96, $c_black, $font_atyp, $desc[1]);
        /* -------------------------------------------  */
        
        
        
        
        /* ----------- QR generator -----------------  */
        $path = $dir_cert_path.'/qr/'.time().rand(10,99).'.png';
        QrCode::size(267)->format('png')->generate(config('my_app.url').'/tekseru?code='.$numb, $path);
        $qrCode = imagecreatefrompng($path);
        imagecopy($pic, $qrCode, $left_qr, $top_qr, 0, 0, 267, 267);
        if (file_exists($path)) unlink($path);
        for($i=0; $i<3; $i++) ImageTTFtext($pic, 14, 0, $left_qr, $top_qr+293+21*$i, $c_black, $font_atypDisplay, $qr_desc[$i]);
        /* -----------------------------------------  */
        
        
        
        
        if (!Storage::disk('public')->exists(OlimpiadaTizim::CERTIFICATE_PATH)) {
            Storage::disk('public')->makeDirectory(OlimpiadaTizim::CERTIFICATE_PATH);
        }
        Imagejpeg($pic,Storage::disk('public')->path(OlimpiadaTizim::CERTIFICATE_PATH)."/".$img_name);
        ImageDestroy($pic);
        return $img_name;
    }
    
    
    public function getSertificate($o_order_id) {
        $o_tizim = OlimpiadaTizim::where('o_order_id', $o_order_id)->first();
        $o_katysu = OlimpiadaKatysu::with(['o_bagyt', 'o_tury', 'o_zhetekshi'])
            ->where('o_order_id', $o_order_id)
            ->first();

        $o_katysushy_idd = $o_katysu->o_katysushy_idd;
        $dir_cert_path = public_path(OlimpiadaTizim::CERTIFICATE_PATH);
        $font_dir = public_path('/fonts');

        $olimpname = $o_katysu['o_bagyt']->o_bagyty;
        $username = $o_tizim->katysushy_name;
        $work = $o_katysu->o_mekeme;

        $kun = $o_katysu->o_date;
        $datetime = new DateTime($kun);
        $year = $datetime->format('Y');
        $month = $datetime->format('m');
        $day = $datetime->format('j');
        $month = $this->getMonth($month);  
        

        $date_true = $day.' '.$month.' '.$year.' жыл';
        $date = $o_katysu->o_date;
        $id = $o_katysu->idd;
        $ln = strlen($id);
        $z = '';
        for($i = $ln; $i<5;$i++) $z .= '0';
        $id = $z.$id;
        $numb = 'OL-'.$id;
        
        $top_qr = 2752;                 // Отступ сверху для QR
        $left_qr = 300;                 // Отступ слева для QR
        $top_id = 2976;                 // Отступ сверху для Доп.текста
        $left_id = 625;                 // Отступ слева для Доп.текста
        $px = 3/4;

        $folder_num = $this->getTypeKatysu($o_katysushy_idd);
        $img_name = $id."-ustdip.jpg";
        $center = 1312.5;
        $img = $dir_cert_path."/ol/new/".$folder_num."/cert.jpg";
        $pic = ImageCreateFromjpeg($img);
        Header("Content-type: image/jpeg");
        
        
        
        /* ------------------------- OPTIONS -------------------------------  */
        $c_black = ImageColorAllocate($pic, 0, 0, 0);
        $c_white = ImageColorAllocate($pic, 251, 252, 252);
        $font_atyp = $font_dir.'/AtypText-Regular.ttf';
        $font_atypDisplay = $font_dir.'/AtypDisplay-Bold.ttf';
        $font_m = $font_dir.'/marta/Marta_Regular.otf';
        
        $icon_path = $dir_cert_path."/ol/new/icons/";

        $info = '«'.$this->mb_ucfirst($month).'» айында '.$olimpname.'ның қатысушысы';
//        $work = 'Алматы облысы, Қарасай ауданы, Қарасай ауданы,';
        $end = 'марапатталады';
        $desc = [
            'Тіркеу номері: '.$numb,
            'Уақыты: '.$date_true
        ];
        $qr_desc = [
            'құжаттың заңдылығын',
            'осы qr-кодты сканерлеу',
            'арқылы тексеруге болады'
        ];
        $text = [
            'Пәні: '.$o_katysu->o_bagyt->bagyt.', '.$o_katysu->o_tury->synyp.' сынып'
        ];
        if($o_katysu->o_zhetekshi_id){
            array_unshift($text, "Жетекшісі: ".$o_katysu->o_zhetekshi->name);
        }
        
        
        $h_info = 1400;
        $width = 2625;
        $margin = 300;
        
        /* --------------------------------------------------------  */
        
        
        
        /* ----------- КОД -----------------  */
        $code_top = 1100;
        
        $box = imagettfbbox(90*$px, 0, $font_atyp, $numb);
        $code_left = $center-round(($box[2]-$box[0])/2);
        ImageTTFtext($pic, 90*$px, 0, $code_left, $code_top, $c_black, $font_atyp, $numb);
        /* ----------------------------  */
        
        
        /* ------- FIO --------*/
        $f_size = 160*$px;
        $w_limit_name = 1800;
        $box = imagettfbbox($f_size, 0, $font_m, $username);
        while ($box[2] > $w_limit_name) {
            $f_size--;
            $box = imagettfbbox($f_size, 0, $font_m, $username);
        }
        $left = $center-round(($box[2]-$box[0])/2);
        $h_info += 230 + $f_size;
        ImageTTFtext($pic, $f_size, 0, $left, $h_info, $c_black, $font_m, $username);
        /* ----------------------------  */
        
        
        
        /* ------------ imageline ----------------  */
        $h_info += 60;
        imageline($pic, 315, $h_info, $width-315, $h_info, $c_black);
        /* ----------------------------  */
        
        
        
        /* ------- DESCRIPTION -------- */
        $h_info = $h_info + 70;
        $h_info = $this->setText($pic, $info, 80*$px,$font_atyp,$width, $center, $margin, $h_info, $c_black );
        
        /* ---------------------------- */
        
        
        
        
        /* ----------- work -----------------  */
        if($o_katysushy_idd != 3){
            if($work){
                $h_info += 40;
                $h_info = $this->setText($pic, $work, 80*$px,$font_atyp,$width, $center, $margin, $h_info, $c_black );
            }
        } else {
            $h_info += 140;
            $this->setAtters($pic, $text, 70*$px, 680, $h_info, $c_black, $icon_path, $font_atyp);
        }
        
        /* ----------------------------------  */
        
        
        
        
        /* ----------- footer content -----------------  */
        ImageTTFtext($pic, 40*$px, 0, $left_id, $top_id+40, $c_black, $font_atyp, $desc[0]);
        ImageTTFtext($pic, 40*$px, 0, $left_id, $top_id+96, $c_black, $font_atyp, $desc[1]);
        /* -------------------------------------------  */
        
        
        
        
        /* ----------- QR generator -----------------  */
        $path = $dir_cert_path.'/qr/'.time().rand(10,99).'.png';
        QrCode::size(267)->format('png')->generate(config('my_app.url').'/tekseru?code='.$numb, $path);
        $qrCode = imagecreatefrompng($path);
        imagecopy($pic, $qrCode, $left_qr, $top_qr, 0, 0, 267, 267);
        if (file_exists($path)) unlink($path);
        for($i=0; $i<3; $i++) ImageTTFtext($pic, 14, 0, $left_qr, $top_qr+293+21*$i, $c_black, $font_atypDisplay, $qr_desc[$i]);
        /* -----------------------------------------  */
        
        
        
        
        
        
        if (!Storage::disk('public')->exists(OlimpiadaTizim::CERTIFICATE_PATH)) {
            Storage::disk('public')->makeDirectory(OlimpiadaTizim::CERTIFICATE_PATH);
        }
        Imagejpeg($pic,Storage::disk('public')->path(OlimpiadaTizim::CERTIFICATE_PATH)."/".$img_name);
        ImageDestroy($pic);
        return $img_name;
    }
    
    public function getAlgys($o_order_id) {
        $o_tizim = OlimpiadaTizim::where('o_order_id', $o_order_id)->first();
        $o_katysu = OlimpiadaKatysu::with(['o_bagyt', 'o_tury', 'o_zhetekshi'])
            ->where('o_order_id', $o_order_id)
            ->first();

        $o_katysushy_idd = $o_katysu->o_katysushy_idd;
        $dir_cert_path = public_path(OlimpiadaTizim::CERTIFICATE_PATH);
        $font_dir = public_path('/fonts');

        $olimpname = $o_katysu['o_bagyt']->o_bagyty;
        $username = $o_katysu->o_zhetekshi->name;

        $kun = $o_katysu->o_date;
        $datetime = new DateTime($kun);
        $year = $datetime->format('Y');
        $month = $datetime->format('m');
        $day = $datetime->format('j');
        $month = $this->getMonth($month);  
        

        $date_true = $day.' '.$month.', '.$year.' жыл';
        $date = $o_katysu->o_date;
        $id = $o_katysu->idd;
        $ln = strlen($id);
        $z = '';
        for($i = $ln; $i<5;$i++) $z .= '0';
        $id = $z.$id;
        $numb = 'OLZH-'.$id;
        
        $top_qr = 2752;                 // Отступ сверху для QR
        $left_qr = 300;                 // Отступ слева для QR
        $top_id = 2976;                 // Отступ сверху для Доп.текста
        $left_id = 625;                 // Отступ слева для Доп.текста
        $px = 3/4;

        $folder_num = $this->getTypeKatysu($o_katysushy_idd);
        $img_name = $id."-ustdip.jpg";
        $center = 1312.5;
        $img = $dir_cert_path."/ol/new/".$folder_num."/algys.jpg";
        $pic = ImageCreateFromjpeg($img);
        Header("Content-type: image/jpeg");
        
        
        
        /* ------------------------- OPTIONS -------------------------------  */
        $c_black = ImageColorAllocate($pic, 0, 0, 0);
        $c_white = ImageColorAllocate($pic, 251, 252, 252);
        $font_atyp = $font_dir.'/AtypText-Regular.ttf';
        $font_atypDisplay = $font_dir.'/AtypDisplay-Bold.ttf';
        $font_m = $font_dir.'/marta/Marta_Regular.otf';
        
        $icon_path = $dir_cert_path."/ol/new/icons/";

        $info = '«'.$this->mb_ucfirst($month).'» айында '.$olimpname.'сында оқушылардың өз бетінше жұмыс жасау және алған білімін қолдану дағдыларын дамытуда белсенділік танытып, олимпиада жеңімпаздарын дайындағаныңыз үшін зор алғыс білдіреміз!';
        $work = 'Сіз зор денсаулық және шығармашылық табыстар тілейміз. Алдағы уақытта әріптестігіміз жалғасын табады деген сенімдеміз!';
        $end = 'марапатталады';
        $desc = [
            'Тіркеу номері: '.$numb,
            'Уақыты: '.$date_true
        ];
        $qr_desc = [
            'құжаттың заңдылығын',
            'осы qr-кодты сканерлеу',
            'арқылы тексеруге болады'
        ];
        
        $h_info = 1400;
        $width = 2625;
        $margin = 300;
        
        /* --------------------------------------------------------  */
        
        
        
        /* ----------- КОД -----------------  */
        $code_top = 1000;
        
        $box = imagettfbbox(90*$px, 0, $font_atyp, $numb);
        $code_left = $center-round(($box[2]-$box[0])/2);
        ImageTTFtext($pic, 90*$px, 0, $code_left, $code_top, $c_black, $font_atyp, $numb);
        /* ----------------------------  */
        
        
        /* ------- FIO --------*/
        $f_size = 160*$px;
        $w_limit_name = 1800;
        $box = imagettfbbox($f_size, 0, $font_m, $username);
        while ($box[2] > $w_limit_name) {
            $f_size--;
            $box = imagettfbbox($f_size, 0, $font_m, $username);
        }
        $left = $center-round(($box[2]-$box[0])/2);
        $h_info += 230 + $f_size;
        ImageTTFtext($pic, $f_size, 0, $left, $h_info, $c_black, $font_m, $username);
        /* ----------------------------  */
        
        
        
        /* ------------ imageline ----------------  */
        $h_info += 60;
        imageline($pic, 315, $h_info, $width-315, $h_info, $c_black);
        /* ----------------------------  */
        
        
        
        /* ------- DESCRIPTION -------- */
        $h_info = $h_info + 60;
        $h_info = $this->setText($pic, $info, 60*$px,$font_atyp,$width, $center, $margin, $h_info, $c_black );
        /* ---------------------------- */
        
        
        
        
        /* ----------- work -----------------  */
        $h_info += 40;
        $h_info = $this->setText($pic, $work, 60*$px,$font_atyp,$width, $center, $margin, $h_info, $c_black );
        /* ----------------------------------  */
        
        
        
        
        /* ----------- footer content -----------------  */
        ImageTTFtext($pic, 40*$px, 0, $left_id, $top_id+40, $c_black, $font_atyp, $desc[0]);
        ImageTTFtext($pic, 40*$px, 0, $left_id, $top_id+96, $c_black, $font_atyp, $desc[1]);
        /* -------------------------------------------  */
        
        
        
        
        /* ----------- QR generator -----------------  */
        $path = $dir_cert_path.'/qr/'.time().rand(10,99).'.png';
        QrCode::size(267)->format('png')->generate(config('my_app.url').'/tekseru?code='.$numb, $path);
        $qrCode = imagecreatefrompng($path);
        imagecopy($pic, $qrCode, $left_qr, $top_qr, 0, 0, 267, 267);
        if (file_exists($path)) unlink($path);
        for($i=0; $i<3; $i++) ImageTTFtext($pic, 14, 0, $left_qr, $top_qr+293+21*$i, $c_black, $font_atypDisplay, $qr_desc[$i]);
        /* -----------------------------------------  */
        
        
        
        
        
        
        if (!Storage::disk('public')->exists(OlimpiadaTizim::CERTIFICATE_PATH)) {
            Storage::disk('public')->makeDirectory(OlimpiadaTizim::CERTIFICATE_PATH);
        }
        Imagejpeg($pic,Storage::disk('public')->path(OlimpiadaTizim::CERTIFICATE_PATH)."/".$img_name);
        ImageDestroy($pic);
        return $img_name;
    }
    
    public function getAlgysHat($o_order_id) {
        $o_tizim = OlimpiadaTizim::where('o_order_id', $o_order_id)->first();
        $o_katysu = OlimpiadaKatysu::with(['o_bagyt', 'o_tury', 'o_zhetekshi'])
            ->where('o_order_id', $o_order_id)
            ->first();

        $o_katysushy_idd = $o_katysu->o_katysushy_idd;
        $dir_cert_path = public_path(OlimpiadaTizim::CERTIFICATE_PATH);
        $font_dir = public_path('/fonts');

        $olimpname = $o_katysu['o_bagyt']->o_bagyty;
        $username = $o_katysu->o_katysushy_fio;

        $kun = $o_katysu->o_date;
        $datetime = new DateTime($kun);
        $year = $datetime->format('Y');
        $month = $datetime->format('m');
        $day = $datetime->format('j');
        $month = $this->getMonth($month);  
        

        $date_true = $day.' '.$month.', '.$year.' жыл';
        $date = $o_katysu->o_date;
        $id = $o_tizim->id;
        $ln = strlen($id);
        $z = '';
        for($i = $ln; $i<5;$i++) $z .= '0';
        $id = $z.$id;
        $numb = 'OLA-'.$id;
        
        $top_qr = 2752;                 // Отступ сверху для QR
        $left_qr = 300;                 // Отступ слева для QR
        $top_id = 2976;                 // Отступ сверху для Доп.текста
        $left_id = 625;                 // Отступ слева для Доп.текста
        $px = 3/4;

        $folder_num = $this->getTypeKatysu($o_katysushy_idd);
        $img_name = $id."-ustdip.jpg";
        $center = 1312.5;
        $img = $dir_cert_path."/ol/new/".$folder_num."/algys_2.jpg";
        $pic = ImageCreateFromjpeg($img);
        Header("Content-type: image/jpeg");
        
        
        
        /* ------------------------- OPTIONS -------------------------------  */
        $c_black = ImageColorAllocate($pic, 0, 0, 0);
        $c_white = ImageColorAllocate($pic, 251, 252, 252);
        $font_atyp = $font_dir.'/AtypText-Regular.ttf';
        $font_atypDisplay = $font_dir.'/AtypDisplay-Bold.ttf';
        $font_m = $font_dir.'/marta/Marta_Regular.otf';
        
        $icon_path = $dir_cert_path."/ol/new/icons/";

        $info = '«'.$this->mb_ucfirst($month).'» айында '.$olimpname.'сында сіздің балаңыз!';
        
        $desc = [
            'Тіркеу номері: '.$numb,
            'Уақыты: '.$date_true
        ];
        $qr_desc = [
            'құжаттың заңдылығын',
            'осы qr-кодты сканерлеу',
            'арқылы тексеруге болады'
        ];
        
        $h_info = 1100;
        $width = 2625;
        $margin = 300;
        
        /* --------------------------------------------------------  */
        
        
        /* ------- DESCRIPTION -------- */
        $margin_left = 800;
        $h_info = $this->setText($pic, $info, 60*$px,$font_atyp,$width-500, $center, $margin, $h_info, $c_black, $margin_left);
        /* ---------------------------- */
        
        /* ------- FIO --------*/
        $f_size = 160*$px;
        $w_limit_name = 1800;
        $box = imagettfbbox($f_size, 0, $font_m, $username);
        while ($box[2] > $w_limit_name) {
            $f_size--;
            $box = imagettfbbox($f_size, 0, $font_m, $username);
        }
        $left = $center-round(($box[2]-$box[0])/2);
        $h_info += 350 + $f_size;
        ImageTTFtext($pic, $f_size, 0, $left, $h_info, $c_black, $font_m, $username);
        /* ----------------------------  */
        
        
        /* ----------- footer content -----------------  */
        ImageTTFtext($pic, 40*$px, 0, $left_id, $top_id+40, $c_black, $font_atyp, $desc[0]);
        ImageTTFtext($pic, 40*$px, 0, $left_id, $top_id+96, $c_black, $font_atyp, $desc[1]);
        /* -------------------------------------------  */
        
        
        
        
        /* ----------- QR generator -----------------  */
        $path = $dir_cert_path.'/qr/'.time().rand(10,99).'.png';
        QrCode::size(267)->format('png')->generate(config('my_app.url').'/tekseru?code='.$numb, $path);
        $qrCode = imagecreatefrompng($path);
        imagecopy($pic, $qrCode, $left_qr, $top_qr, 0, 0, 267, 267);
        if (file_exists($path)) unlink($path);
        for($i=0; $i<3; $i++) ImageTTFtext($pic, 14, 0, $left_qr, $top_qr+293+21*$i, $c_black, $font_atypDisplay, $qr_desc[$i]);
        /* -----------------------------------------  */
        
        
        
        
        if (!Storage::disk('public')->exists(OlimpiadaTizim::CERTIFICATE_PATH)) {
            Storage::disk('public')->makeDirectory(OlimpiadaTizim::CERTIFICATE_PATH);
        }
        Imagejpeg($pic,Storage::disk('public')->path(OlimpiadaTizim::CERTIFICATE_PATH)."/".$img_name);
        ImageDestroy($pic);
        return $img_name;
    }
    
    protected function getMonth($month){
        switch ($month) {
            case 1: return 'қаңтар';
            case 2: return 'ақпан';
            case 3: return 'наурыз';
            case 4: return 'сәуір';
            case 5: return 'мамыр';
            case 6: return 'маусым';
            case 7: return 'шілде';
            case 8: return 'тамыз';
            case 9: return 'қыркүйек';
            case 10: return 'қазан';
            case 11: return 'қараша';
            case 12: return 'желтоқсан';
        }
    }

    protected function getTypeKatysu($id){
        switch ($id) {
            case 1: return 1;
            case 2: return 2;
            case 3: return 2;
            case 4: return 1;
        }
    }
    
    protected function setText($pic, $text, $f_size, $f_family, $width, $center, $margin, $h_info, $c_black, $margin_left = 0){
        $px = 3/4;
        $text_b = explode(' ', $text);
        $text_new = '';
        $test = array();
        $i = 0;
        $kol = 1;
        $q = [0];
        foreach ($text_b as $word) {
            $btext = imagettfbbox($f_size, 0, $f_family, $text_new.' '.$word);
            if($btext[2] > $width - $margin*2){
                if($i <= 4){
                    $test[$i] = $text_new;
                    if($i != 0){
                        $q[$i] = str_replace($test[$i-1],'',$test[$i]);
                    }
                    else{
                        $q[$i] = $test[$i];
                    }
                    $i++;
                }
                $text_new = $text_new."\n".$word;
                $kol++;
            }
            else {
                $text_new .= " ".$word;
            }
        }
        if($i != 0){
            $q[$i] = str_replace($test[$i-1],'',$text_new);
        }
        $text_new = trim($text_new);
        $leftt = array();
        for($k = 0;$k<=$i; $k++){
            if(!$q[0]){
                $box1 = imagettfbbox($f_size, 0, $f_family, $text_new);
                if(!$margin_left) $leftt[$k] = $center-round(($box1[2]-$box1[0])/2);
                else $leftt[$k] = $margin_left;
                $h_info+=80;
                ImageTTFtext($pic, $f_size, 0, $leftt[$k], $h_info, $c_black, $f_family, $text_new);
                break;
            }
            else{
                $q[$k]=trim($q[$k]);
                $box1 = imagettfbbox($f_size, 0, $f_family, $q[$k]);
                if(!$margin_left) $leftt[$k] = $center-round(($box1[2]-$box1[0])/2);
                else $leftt[$k] = $margin_left;
                $h_info+=80;
                ImageTTFtext($pic, $f_size, 0, $leftt[$k], $h_info, $c_black, $f_family, $q[$k]);
            }
        }
        return $h_info;
    }
//                               array font_size  width limit
    protected function setAtters($pic, $text, $f_size, $left_desc, $top_desc, $c_black, $icon_path, $font_atyp){
        $px = 3/4;
        $l_desc = 60 * $px;             // Размер лайна для гл.текста
        $w_limit_text = 1577;           // Лимит ширины для гл.текста (для переноса строки)
        $icons = [];
        $icons[0] = imagecreatefrompng($icon_path.'icon1.png');
        $icons[1] = imagecreatefrompng($icon_path.'icon2.png');
        
        for($i=0; $i<count($text); $i++){
            $bbox = imagettfbbox($f_size, 0, $font_atyp, $text[$i]);
            $w_desc = $bbox[2] - $bbox[0];
            $h_desc = 0;
            $next_rows = [];

            if($w_desc >= $w_limit_text){
                if($i != 2){
                    $words = explode(' ', $text[$i]);
                    while ($w_desc >= $w_limit_text) {
                        $drop_text = array_pop($words);
                        $text[$i] = implode(' ', $words);
                        array_unshift($next_rows, $drop_text);
                        $bbox = imagettfbbox($f_size, 0, $font_atyp, $text[$i]);
                        $w_desc = $bbox[2] - $bbox[0];
                    }
                } else {
                    while ($w_desc >= $w_limit_text) {
                        $text[$i] = substr($text[$i], 0, -3);
                        $bbox = imagettfbbox($f_size, 0, $font_atyp, $text[$i]);
                        $w_desc = $bbox[2] - $bbox[0];
                    }
                    $text[$i] .= '...';
                }
            }
            $words = explode(':', $text[$i]);
            $first_part = $words[0].':';
            array_shift($words);
            $second_part = implode(':', $words);
            imagettftext($pic, $f_size, 0, $left_desc, $top_desc, $c_black, $font_atyp, $first_part);

            $f_bbox = imagettfbbox($f_size, 0, $font_atyp, $first_part); //second text
            $x = $left_desc + $f_bbox[2] - $f_bbox[0];
            ImageTTFtext($pic, $f_size, 0, $x+40, $top_desc, $c_black, $font_atyp, $second_part);

            if(count($next_rows)){
                $h_desc += $bbox[3] - $bbox[1] + 20 + $f_size;
                $text[$i] = implode(' ', $next_rows);
                $f_bbox = imagettfbbox($f_size, 0, $font_atyp, $text[$i]); //second row string
                $x = $f_bbox[2] - $f_bbox[0];
                if($x >= $w_limit_text) {
                    $words = explode(' ', $text[$i]);
                    while ($x >= $w_limit_text - 12) {
                        $drop_text = array_pop($words);
                        $text[$i] = implode(' ', $words);
                        $bbox = imagettfbbox($f_size, 0, $font_atyp, $text[$i]);
                        $x = $bbox[2] - $bbox[0];
                    }
                    $text[$i] .= '...';
                }
                ImageTTFtext($pic, $f_size, 0, $left_desc, $top_desc+$h_desc, $c_black, $font_atyp, $text[$i]);
            }
            imagecopy($pic, $icons[$i], $left_desc-100, $top_desc - $f_size/2 - 37, 0, 0, 74, 74);
            $top_desc += $h_desc + 40 + $l_desc/$px;
        }
    }
    protected function mb_ucfirst($str) {
		$fc = mb_strtoupper(mb_substr($str, 0, 1));
		return $fc . mb_substr($str, 1);
	}

}
