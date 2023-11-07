<?php

namespace App\Services\V1\Olimpiada;

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
    public function getDiplom($code, $diplom){
        $otizim = OlimpiadaTizim::where('code', $code)->first();
        $obw = $otizim->obwcode;
        $okatysu = OlimpiadaKatysu::where('obwcode', $obw)->where('o_order_id', $otizim->o_order_id)->first();
        $katysushy = $okatysu->o_katysushy_idd;
        $obagyt = OlimpiadaBagyty::find($okatysu->o_bagyty_idd);
        $tury = OlimpiadaTury::find($okatysu->o_tury_idd);

        $dir_cert_path = public_path(OlimpiadaTizim::CERTIFICATE_PATH);
        $font_dir = public_path('/fonts');

        $olimpname = $obagyt->bagyt;
        $username = $otizim->katysushy_name;
        $work = $otizim->katysushy_work;
        $kun = $okatysu->o_date;
        $datetime = new DateTime($kun);
        $year = $datetime->format('Y');
        $month = $datetime->format('n');
        $day = $datetime->format('j');
       // $year = '«Зияткерлік олимпиада - '.$year.'»';
        //$month = $oturnirmd->o_turnir;
        switch ($month) {
            case 1:
                $month = 'қаңтар';
                break;
            case 2:
                $month = 'ақпан';
                break;
            case 3:
                $month = 'наурыз';
                break;
            case 4:
                $month = 'сәуір';
                break;
            case 5:
                $month = 'мамыр';
                break;
            case 6:
                $month = 'маусым';
                break;
            case 7:
                $month = 'шілде';
                break;
            case 8:
                $month = 'тамыз';
                break;
            case 9:
                $month = 'қыркүйек';
                break;
            case 10:
                $month = 'қазан';
                break;
            case 11:
                $month = 'қараша';
                break;
            case 12:
                $month = 'желтоқсан';
                break;
        }
        $kol = 1;
        $date_true = $day.' '.$month.' '.$year.' жыл';
        $date = $okatysu->o_date;
        $id = $otizim->id;
        $ln = strlen($id);
        $z = '';
        for($i = $ln; $i<7;$i++){
            $z .= '0';
        }
        $id = $z.$id;
        $zhetekshisi = $okatysu->o_katysushy_fio;
         if($okatysu->o_oblis == 1){
            $olimp_type_name ='Облыстық';
            $number = '№X-';
        }elseif($okatysu->o_oblis == 2){
            $olimp_type_name ='Республикалық';
            $number = '№R-';
        }elseif($okatysu->o_oblis == 3){
            $olimp_type_name ='Халықаралық';
            $number = '№O-';
        }
        $numb = $number.$id;
        if($okatysu->o_katysushy_idd == 1){
            $olimp_qat_name ='ұстаздар';
            $paninen = ' пәнінен ';
        }elseif($okatysu->o_katysushy_idd == 2){
            $olimp_qat_name ='студенттер';
            $paninen = ' пәнінен ';
        }elseif($okatysu->o_katysushy_idd == 3){
            $olimp_qat_name ='оқушылар';
            $paninen = ' пәнінен ';
        }elseif($okatysu->o_katysushy_idd == 4){
            $olimp_qat_name ='тәрбиешілер';
            $paninen = ' ';
        }
        $ttl = '"'.$olimp_type_name.'" олимпиада';
             $img_name = $id."-ustdip.jpg";
                 $center = 1240;
                 switch ($diplom) {
                    case '1':
                      $img = $dir_cert_path."/ol/diplom1.jpg";
                        $pic = ImageCreateFromjpeg($img);
                      $c_name = ImageColorAllocate($pic, 244, 181, 60);
                      $topmar = 625;
                      $h_info = 2046;
                      break;
                    case '2':
                      $img = $dir_cert_path."/ol/diplom2.jpg";
                      $pic = ImageCreateFromjpeg($img);
                      $c_name = ImageColorAllocate($pic, 92, 89, 89);
                      $topmar = 685;
                      $h_info = 2015;
                      break;
                    case '3':
                      $img = $dir_cert_path."/ol/diplom3.jpg";
                      $pic = ImageCreateFromjpeg($img);
                      $c_name = ImageColorAllocate($pic, 222, 116, 51);
                      $topmar = 703;
                      $h_info = 2015;
                      break;
                    default:
                      $img = $dir_cert_path."/ol/diplom1.jpg";
                      $pic = ImageCreateFromjpeg($img);
                      $c_name = ImageColorAllocate($pic, 244, 181, 60);
                      $topmar = 625;
                      $h_info = 2046;
                      break;
                  }
                  Header("Content-type: image/jpeg");
                $c_black = ImageColorAllocate($pic, 7, 7, 7);
                $c_white = ImageColorAllocate($pic, 251, 252, 252);
                $font = $font_dir.'/times-new-roman.ttf';
                $font_as = $dir_cert_path.'/ol/asylbek.ttf';
                $font_cambria_it = $font_dir.'/cambria/cambriai.ttf';
                $font_robotobold = $font_dir.'/timesbd.ttf';

                /* --- Text   ---*/
                //$info = 'Халықаралық '.$olimpname.'сының жеңімпазы '.$work;
                $info = '«Ustaz tilegi» ғылыми-әдістемелік орталығы ұйымдастырған '.$olimp_type_name.' '.$olimpname.$paninen.$olimp_qat_name.' арасындағы онлайн олимпиадасының жеңімпазы';
                $end = 'марапатталады';
                $width = 2480;
                $margin = 300;
                $text_b = explode(' ',$info);
                $text_new = '';
                $test = array();
                $i = 0;
                $kol = 1;
                $box = imagettfbbox(57.15, 0, $font, $numb);
                $left = $center-round(($box[2]-$box[0])/2);
//                ImageTTFtext($pic, 57.15, 0, $left, $h_in fo, $c_text, $font, $numb);
                $h_info = $h_info + 70;
                $k25 = 0;
                foreach ($text_b as $word) {
                $btext = imagettfbbox(48.75, 0, $font, $text_new.' '.$word);
                if($btext[2] > $width - $margin*2){
                    if($i <= 4){
                      $test[$i] = $text_new;
                      if($i-1 != -1){
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
                if($i-1 != -1){
                    $q[$i] = str_replace($test[$i-1],'',$text_new);
                }
                  $text_new = trim($text_new);
                  $leftt = array();
                  for($k = 0;$k<=$i; $k++){
                    if(!$q[0]){
                      $box1 = imagettfbbox(53.32, 0, $font, $text_new);
                      $leftt[$k] = $center-round(($box1[2]-$box1[0])/2);
                      ImageTTFtext($pic, 53.32, 0, $leftt[$k], $h_info, $c_black, $font, $text_new);
                      break;
                  }
                  else{
                      $q[$k]=trim($q[$k]);
                      $box1 = imagettfbbox(53.32, 0, $font, $q[$k]);
                      $leftt[$k] = $center-round(($box1[2]-$box1[0])/2);
                      $h_info+=80;
                      ImageTTFtext($pic, 53.32, 0, $leftt[$k], $h_info, $c_black, $font, $q[$k]);
                    }
                  }
                if($kol == 1){
                    $h_name = $kol*100 + $h_info;
                }else{
                    $h_name = $kol*50 + $h_info;
                }
                $h_end = $h_name + 160;
                /* ----------------------------  */
                /* ------- FIO --------*/
                $box = imagettfbbox(102.55, 0, $font_as, $username);
                $left = $center-round(($box[2]-$box[0])/2);
                ImageTTFtext($pic, 102.55, 0, $left, $h_name, $c_black, $font_as, $username);
                /* ----------------------------  */

                $box2 = imagettfbbox(53.32, 0, $font, 'МАРАПАТТАЛАДЫ');
                $left2 = $center-round(($box2[2]-$box2[0])/2);
                ImageTTFtext($pic, 53.32, 0, $left2, $h_end, $c_black, $font, 'МАРАПАТТАЛАДЫ');
                $h_date =  $h_end + 150;
                //ImageTTFtext($pic, 45, 0, 364, 2940, $c_black, $font, $month);
                $box3 = imagettfbbox(57.15, 0, $font, $date_true);
                $left3 = $center-round(($box3[2]-$box3[0])/2);
                ImageTTFtext($pic, 57.15, 0, $left3, $h_date, $c_black, $font, $date_true);

                $boxyear = imagettfbbox(30.48, 0, $font_robotobold, $ttl);
                $leftyear = $center-round(($boxyear[2]-$boxyear[0])/2);
                ImageTTFtext($pic, 30.48, 0, $leftyear, $topmar, $c_white, $font_robotobold, $ttl);
                /*
                ImageTTFtext($pic, 29.2125, 0, 900, 3272, $c_black, $font_robotobold, $id2);
                ImageTTFtext($pic, 29.2125, 0, 900, 3217, $c_black, $font_robotobold, $date);*/
                if (!Storage::disk('public')->exists(OlimpiadaTizim::CERTIFICATE_PATH)) {
                    Storage::disk('public')->makeDirectory(OlimpiadaTizim::CERTIFICATE_PATH);
                }
                Imagejpeg($pic,Storage::disk('public')->path(OlimpiadaTizim::CERTIFICATE_PATH)."/".$img_name);
                ImageDestroy($pic);
                return $img_name;
              }

    public function getSertificate($code){
        $otizim = OlimpiadaTizim::where('code', $code)->first();
        $obw = $otizim->obwcode;
        $okatysu = OlimpiadaKatysu::where('obwcode', $obw)->where('o_order_id', $otizim->o_order_id)->first();
        $katysushy = $okatysu->o_katysushy_idd;
        $obagyt = OlimpiadaBagyty::find($okatysu->o_bagyty_idd);
        $tury = OlimpiadaTury::find($okatysu->o_tury_idd);
        $oturnirmd = OlimpiadaTurnir::where('enable', 1)->first();

        $dir_cert_path = public_path(OlimpiadaTizim::CERTIFICATE_PATH);
        $font_dir = public_path('/fonts');

        $olimpname = $obagyt->bagyt;
        $username = $otizim->katysushy_name;
        $work = $otizim->katysushy_work;
        $kun = $okatysu->o_date;
        $datetime = new DateTime($kun);
        $year = $datetime->format('Y');
        $month = $datetime->format('n');
        $day = $datetime->format('j');
        switch ($month) {
            case 1:
                $month = 'қаңтар';
                break;
            case 2:
                $month = 'ақпан';
                break;
            case 3:
                $month = 'наурыз';
                break;
            case 4:
                $month = 'сәуір';
                break;
            case 5:
                $month = 'мамыр';
                break;
            case 6:
                $month = 'маусым';
                break;
            case 7:
                $month = 'шілде';
                break;
            case 8:
                $month = 'тамыз';
                break;
            case 9:
                $month = 'қыркүйек';
                break;
            case 10:
                $month = 'қазан';
                break;
            case 11:
                $month = 'қараша';
                break;
            case 12:
                $month = 'желтоқсан';
                break;
        }
        $kol = 1;
        $date_true = $day.' '.$month.' '.$year.' жыл';
        $date = $okatysu->o_date;
        $id = $okatysu->idd;
        $ln = strlen($id);
        $z = '';
        for($i = $ln; $i<7;$i++){
            $z .= '0';
        }
        $id = $z.$id;
        $zhetekshisi = $okatysu->o_katysushy_fio;
         if($okatysu->o_oblis == 1){
            $olimp_type_name ='Облыстық';
            $number = 'OL-';
        }elseif($okatysu->o_oblis == 2){
            $olimp_type_name ='Республикалық';
            $number = 'OL-';
        }elseif($okatysu->o_oblis == 3){
            $olimp_type_name ='Халықаралық';
            $number = 'OL-';
        }
        $numb = $number.$id;
        if($okatysu->o_katysushy_idd == 1){
            $olimp_qat_name ='ұстаздар';
        }elseif($okatysu->o_katysushy_idd == 2){
            $olimp_qat_name ='студенттер';
        }elseif($okatysu->o_katysushy_idd == 3){
            $olimp_qat_name ='оқушылар';
        }elseif($okatysu->o_katysushy_idd == 4){
            $olimp_qat_name ='тәрбиешілер';
        }
        $font = $font_dir.'/times-new-roman.ttf';
        $font_as = $dir_cert_path.'/ol/asylbek.ttf';
        $font_cambria_it = $font_dir.'/cambria/cambriai.ttf';
        $font_robotobold = $font_dir.'/timesbd.ttf';
        for($i = $ln; $i<7;$i++){
            $z .= '0';
        }
        $oblys = OlimpiadaTurnir::getOblys($okatysu->oblysy);
        $id = $z.$id;
        $zhetekshisi = $okatysu->o_katysushy_fio;

        $img_name = $id."-ustdip.jpg";

        $center = 1760;
        $img = $dir_cert_path.'/ol/ser.jpg';
        $pic = ImageCreateFromjpeg($img);
        $c_name = ImageColorAllocate($pic, 206, 45, 68);
        $c_text = ImageColorAllocate($pic, 0, 63, 86);
        $c_dark = ImageColorAllocate($pic, 55, 54, 54);
        $info = '«Ustaz tilegi» ғылыми - әдістемелік орталығы ұйымдастырған '.$olimp_type_name.' '.$olimpname.' пәнінен '.$olimp_qat_name.' арасындағы онлайн олимпиадасына қатысқандығын растайды.';
        $end = 'қатысқандығын растайды';
        $qr_desc = [
            'құжаттың заңдылығын',
            'осы qr-кодты сканерлеу',
            'арқылы тексеруге болады'
        ];
        $width = 2350;
        $margin = 15;
        $text_b = explode(' ',$info);
        $text_new = '';
        $test = array();
        $i = 0;
        $h_info = 830;
        $kol = 1;
        $box = imagettfbbox(45.73, 0, $font, $numb);
        $left = $center-round(($box[2]-$box[0])/2);
        ImageTTFtext($pic, 45.73, 0, $left, $h_info, $c_name, $font, $numb);
        $h_info = $h_info + 230;
        $box = imagettfbbox(117.37, 0, $font_as, $username);
        $left = $center-round(($box[2]-$box[0])/2);
        ImageTTFtext($pic, 117.37, 0, $left, $h_info, $c_name, $font_as, $username);
        $h_info = $h_info + 150;
        foreach ($text_b as $word) {
            $btext = imagettfbbox(55.73, 0, $font, $text_new.' '.$word);
            if($btext[2] > $width - $margin*2){
                if($i <= 4){
                  $test[$i] = $text_new;
                  if($i-1 != -1){
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
        if($i-1 != -1){
            $q[$i] = str_replace($test[$i-1],'',$text_new);
        }
        $text_new = trim($text_new);
        $leftt = array();
        for($k = 0;$k<=$i; $k++){
            if(!$q[0]){
              $box1 = imagettfbbox(55.73, 0, $font, $text_new);
              $leftt[$k] = $center-round(($box1[2]-$box1[0])/2);
              ImageTTFtext($pic, 55.73, 0, $leftt[$k], $h_info, $c_text, $font, $text_new);
              break;
            }
            else{
                $q[$k]=trim($q[$k]);
                $box1 = imagettfbbox(55.73, 0, $font, $q[$k]);
                $leftt[$k] = $center-round(($box1[2]-$box1[0])/2);
                $h_info+=70;
                ImageTTFtext($pic, 55.73, 0, $leftt[$k], $h_info, $c_text, $font, $q[$k]);
            }
        }
        if($kol == 1){
            $h_name = $kol*100 + $h_info;
        }else{
            $h_name = $kol*45 + $h_info;
        }

        $path = $dir_cert_path.'/qr/'.time().rand(10,99).'.png';
        QrCode::size(267)->format('png')->generate(config('my_app.url').'/tekseru?code='.$numb, $path);
        $qrCode = imagecreatefrompng($path);
        imagecopy($pic, $qrCode, 2790, 1750, 0, 0, 267, 267);
        if (file_exists($path)) unlink($path);



        $box2 = imagettfbbox(57.16, 0, $font, $date_true);
        $left2 = $center-round(($box2[2]-$box2[0])/2);
        ImageTTFtext($pic, 57.16, 0, $left2, $h_name, $c_text, $font, $date_true);
        Imagejpeg($pic,Storage::disk('public')->path(OlimpiadaTizim::CERTIFICATE_PATH)."/".$img_name);
        ImageDestroy($pic);
        return $img_name;
    }

    public function getAlgys($order_id, $type, $code, $zhetekshi = null){
        $okatysu = OlimpiadaKatysu::with('o_zhetekshi')->where('o_order_id', $order_id)->first();
        $katysushy = $okatysu->o_katysushy_idd;
        $obagyt = OlimpiadaBagyty::findOrFail($okatysu->o_bagyty_idd);
        $tury = OlimpiadaTury::findOrFail($okatysu->o_tury_idd);
        $oturnirmd = OlimpiadaTurnir::where('enable', 1)->first();
        $otizim = OlimpiadaTizim::where('code', $code)->first();

        $dir_cert_path = public_path(OlimpiadaTizim::CERTIFICATE_PATH);
        $font_dir = public_path('/fonts');

        $ida = $otizim->id;
        $lna = strlen($ida);
        $za = '';
        for($i = $lna; $i<7;$i++){
            $za .= '0';
        }
        $ida = $za.$ida;

        $olimpname = $obagyt->bagyt;
        $username = $zhetekshi ? $zhetekshi->name : $okatysu->o_katysushy_fio;
        $kun = $okatysu->o_date;
        $datetime = new DateTime($kun);
        $year = $datetime->format('Y');
        $month = $datetime->format('n');
        $day = $datetime->format('j');
       // $year = '«Зияткерлік олимпиада - '.$year.'»';
        //$month = $oturnirmd->o_turnir;
        switch ($month) {
            case 1:
                $month = 'қаңтар';
                break;
            case 2:
                $month = 'ақпан';
                break;
            case 3:
                $month = 'наурыз';
                break;
            case 4:
                $month = 'сәуір';
                break;
            case 5:
                $month = 'мамыр';
                break;
            case 6:
                $month = 'маусым';
                break;
            case 7:
                $month = 'шілде';
                break;
            case 8:
                $month = 'тамыз';
                break;
            case 9:
                $month = 'қыркүйек';
                break;
            case 10:
                $month = 'қазан';
                break;
            case 11:
                $month = 'қараша';
                break;
            case 12:
                $month = 'желтоқсан';
                break;
        }
        $kol = 1;
        $date_true = $day.' '.$month.' '.$year.' жыл';
        $date = date('d.m.Y');
        $id = $okatysu->idd;
        $ln = strlen($id);
        $z = '';
        for($i = $ln; $i<7;$i++){
            $z .= '0';
        }
        $id = $z.$id;
        if($okatysu->o_oblis == 1){
            $olimp_type_name ='облыстық';
        }elseif($okatysu->o_oblis == 2){
            $olimp_type_name ='республикалық';
        }elseif($okatysu->o_oblis == 3){
            $olimp_type_name ='халықаралық';
        }

        if($okatysu->o_katysushy_idd == 1){
            $olimp_qat_name ='ұстаздар';
        }elseif($okatysu->o_katysushy_idd == 2){
            $olimp_qat_name ='студенттерінің';
        }elseif($okatysu->o_katysushy_idd == 3){
            $olimp_qat_name ='оқушыларының';
        }elseif($okatysu->o_katysushy_idd == 4){
            $olimp_qat_name ='тәрбиешілер';
        }

            $img_name = $id."-ustdip.jpg";
            if($type == 1){
                $center = 1250;
                $number = 'OLZH-';
                $idzh=$zhetekshi->id;
                $lna = strlen($idzh);
                $za = '';
                for($i = $lna; $i<6;$i++){
                    $za .= '0';
                }
                $idzh = $za.$idzh;
                $numb = $number.$idzh;
                $img = $dir_cert_path."/ol/zhet.jpg";
                $pic = ImageCreateFromjpeg($img);
                $c_name = ImageColorAllocate($pic, 214, 181, 40);
                $c_text = ImageColorAllocate($pic, 26, 91, 91);
                $c_dark = ImageColorAllocate($pic, 26, 91, 91);
                Header("Content-type: image/jpeg");
                $font = $font_dir.'/times-new-roman.ttf';
                $font_as = $dir_cert_path.'/ol/asylbek.ttf';
                $font_cambria_it = $font_dir.'/cambria/cambriai.ttf';
                $font_robotobold = $font_dir.'/timesbd.ttf';
                $info = '«Ustaz tilegi» ғылыми-әдістемелік орталығының '.$olimp_type_name.' онлайн олимпиадасында '.$olimp_qat_name.'  өз бетінше жұмыс жасау және алған білімін қолдану дағдыларын дамытуда белсенділік танытқаны үшін жетекшісі';
                $end = 'МАРАПАТТАЛАДЫ';
                $width = 2000;
                $margin = 15;
                $text_b = explode(' ',$info);
                $text_new = '';
                $test = array();
                $i = 0;
                $h_info = 900;
                $kol = 1;
                $box = imagettfbbox(50, 0, $font, $numb);
                $left = $center-round(($box[2]-$box[0])/2);
                ImageTTFtext($pic, 50, 0, $left, $h_info, $c_text, $font, $numb);
                $h_info = 960;
                foreach ($text_b as $word) {
                    $btext = imagettfbbox(43, 0, $font, $text_new.' '.$word);
                    if($btext[2] > $width - $margin*2){
                        if($i <= 4){
                          $test[$i] = $text_new;
                          if($i-1 != -1){
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
                if($i-1 != -1){
                    $q[$i] = str_replace($test[$i-1],'',$text_new);
                }
                $text_new = trim($text_new);
                $leftt = array();
                for($k = 0;$k<=$i; $k++){
                    if(!$q[0]){
                      $box1 = imagettfbbox(43, 0, $font, $text_new);
                      $leftt[$k] = $center-round(($box1[2]-$box1[0])/2);
                      ImageTTFtext($pic, 43, 0, $leftt[$k], $h_info, $c_text, $font, $text_new);
                      break;
                    }
                    else{
                        $q[$k]=trim($q[$k]);
                        $box1 = imagettfbbox(43, 0, $font, $q[$k]);
                        $leftt[$k] = $center-round(($box1[2]-$box1[0])/2);
                        $h_info+=70;
                        ImageTTFtext($pic, 43, 0, $leftt[$k], $h_info, $c_text, $font, $q[$k]);
                    }
                }
                if($kol == 1){
                    $h_name = $kol*100 + $h_info;
                }else{
                    $h_name = $kol*60 + $h_info;
                }
                $h_end = $h_name + 160;
                $h_month = $h_end + 160;

                $fontSize = 114;
                $box = imagettfbbox($fontSize, 0, $font_as, $username);
                $textWidth = $box[2] - $box[0];
                $desiredWidth = 1800;
                while ($textWidth > $desiredWidth) {
                    $fontSize--;
                    $box = imagettfbbox($fontSize, 0, $font_as, $username);
                    $textWidth = $box[2] - $box[0];
                }
                $left = $center-round(($box[2]-$box[0])/2);
                ImageTTFtext($pic, $fontSize, 0, $left, $h_name, $c_name, $font_as, $username);

                $box2 = imagettfbbox(43.8, 0, $font, $end);
                $left2 = $center-round(($box2[2]-$box2[0])/2);
                ImageTTFtext($pic, 43.8, 0, $left2, $h_end, $c_text, $font, $end);
                $h_end = $h_end + 160;
                $box2 = imagettfbbox(43.8, 0, $font, $date_true);
                $left2 = $center-round(($box2[2]-$box2[0])/2);
                ImageTTFtext($pic, 43.8, 0, $left2, $h_end, $c_text, $font, $date_true);

                $path = $dir_cert_path.'/qr/'.time().rand(10,99).'.png';
                QrCode::size(267)->format('png')->generate(config('my_app.url').'/tekseru?code='.$numb, $path);
                $qrCode = imagecreatefrompng($path);
                imagecopy($pic, $qrCode, 1887, 1902, 0, 0, 267, 267);
                Imagejpeg($pic,Storage::disk('public')->path(OlimpiadaTizim::CERTIFICATE_PATH)."/".$img_name);
                ImageDestroy($pic);
                return $img_name;
            }else
            if($type == 2){
                $number = 'OLA-';
                $id = $otizim->id;
                $ln = strlen($id);
                $z = '';
                for($i = $ln; $i<7;$i++){
                    $z .= '0';
                }
                $id = $z.$id;
                $numb = $number.$id;
                 $center = 1250;
                $img = $dir_cert_path."/ol/parents.jpg";
                $pic = ImageCreateFromjpeg($img);
                $c_name = ImageColorAllocate($pic, 214, 181, 40);
                $c_text = ImageColorAllocate($pic, 63, 67, 67);
                $c_dark = ImageColorAllocate($pic, 63, 67, 67);
                Header("Content-type: image/jpeg");
                $font = $font_dir.'/times-new-roman.ttf';
                $font_as = $dir_cert_path.'/ol/asylbek.ttf';
                $font_cambria_it = $font_dir.'/cambria/cambriai.ttf';
                $font_robotobold = $font_dir.'/timesbd.ttf';
                $username = $otizim->katysushy_name;
                $top_1txt = 'Құрметті Ата-ана!';
                $top_2txt = 'Балаңыз, '.$username;
                $info1 = '«Ustaz tilegi» ғылыми-әдістемелік орталығының '.$olimp_type_name.' онлайн олимпиадасына  қатысып, белсенділік танытқаны үшін сізге алғыс білдіреміз! Сіздің балаңыз өзін білімді, дарынды, еңбекқор тұлға екенін көрсетті. Ата-ананың қолдауы балаға сенімділік пен жаңа жетістіктерге жол ашады. Балаңыздың алар асулары, бағындырар белестері  көп болсын!';
                $end = 'МАРАПАТТАЛАДЫ';
                $width = 2000;
                $margin = 15;
                $text_b1 = explode(' ',$info1);
//                $text_b2 = explode(' ',$info2);
//                $text_b3 = explode(' ',$info3);
                $text_new = '';
                $test = array();

                $i = 0;
                $hto = 835;
                $box = imagettfbbox(50, 0, $font, $numb);
                $left = $center-round(($box[2]-$box[0])/2);
                ImageTTFtext($pic, 50, 0, $left, $hto, $c_text, $font, $numb);
                $htop = 920;
                $box2 = imagettfbbox(43.8, 0, $font_robotobold, $top_1txt);
                $left2 = $center-round(($box2[2]-$box2[0])/2);
                ImageTTFtext($pic, 43.8, 0, $left2, $htop, $c_text, $font_robotobold, $top_1txt);
                $box2 = imagettfbbox(43.8, 0, $font_robotobold, $top_2txt);
                $left2 = $center-round(($box2[2]-$box2[0])/2);
                ImageTTFtext($pic, 43.8, 0, $left2, $htop +80, $c_text, $font_robotobold, $top_2txt);

                $h_info = 1020;
                $kol = 1;
                foreach ($text_b1 as $word) {
                    $btext = imagettfbbox(43, 0, $font, $text_new.' '.$word);
                    if($btext[2] > $width - $margin*2){
                        if($i <= 4){
                          $test[$i] = $text_new;
                          if($i-1 != -1){
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
                if($i-1 != -1){
                    $q[$i] = str_replace($test[$i-1],'',$text_new);
                }
                $text_new = trim($text_new);
                $leftt = array();
                for($k = 0;$k<=$i; $k++){
                    if(!$q[0]){
                      $box1 = imagettfbbox(43, 0, $font, $text_new);
                      $leftt[$k] = $center-round(($box1[2]-$box1[0])/2);
                      ImageTTFtext($pic, 43, 0, $leftt[$k], $h_info, $c_text, $font, $text_new);
                      break;
                    }
                    else{
                        $q[$k]=trim($q[$k]);
                        $box1 = imagettfbbox(43, 0, $font, $q[$k]);
                        $leftt[$k] = $center-round(($box1[2]-$box1[0])/2);
                        $h_info+=70;
                        ImageTTFtext($pic, 43, 0, $leftt[$k], $h_info, $c_text, $font, $q[$k]);
                    }
                }
                if($kol == 1){
                    $h_name = $kol*80 + $h_info;
                }else{
                    $h_name = $kol*50 + $h_info;
                }
                $h_end = $h_name + 140;

                $box = imagettfbbox(114.3, 0, $font_as, $username);
                $left = $center-round(($box[2]-$box[0])/2);
                ImageTTFtext($pic, 114.3, 0, $left, $h_name, $c_name, $font_as, $username);

                $box2 = imagettfbbox(43.8, 0, $font, $end);
                $left2 = $center-round(($box2[2]-$box2[0])/2);
                ImageTTFtext($pic, 43.8, 0, $left2, $h_end, $c_text, $font, $end);
                $h_end = $h_end + 130;
                $box2 = imagettfbbox(43.8, 0, $font, $date_true);
                $left2 = $center-round(($box2[2]-$box2[0])/2);
                ImageTTFtext($pic, 43.8, 0, $left2, $h_end, $c_text, $font, $date_true);

                $path = $dir_cert_path.'/qr/'.time().rand(10,99).'.png';
                QrCode::size(267)->format('png')->generate(config('my_app.url').'/tekseru?code='.$numb, $path);
                $qrCode = imagecreatefrompng($path);
                imagecopy($pic, $qrCode, 1887, 1982, 0, 0, 267, 267);
                if (file_exists($path)) unlink($path);
                if (!Storage::disk('public')->exists(OlimpiadaTizim::CERTIFICATE_PATH)) {
                    Storage::disk('public')->makeDirectory(OlimpiadaTizim::CERTIFICATE_PATH);
                }
                Imagejpeg($pic,Storage::disk('public')->path(OlimpiadaTizim::CERTIFICATE_PATH)."/".$img_name);
                ImageDestroy($pic);
                return $img_name;
            }
        }
}
