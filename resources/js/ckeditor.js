import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Image, ImageCaption, ImageResizeEditing, ImageResizeHandles, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Link } from '@ckeditor/ckeditor5-link';
import MathType from '@wiris/mathtype-ckeditor5/src/plugin';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Alignment } from '@ckeditor/ckeditor5-alignment'; 

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
    Essentials,
    Autoformat,
    SimpleUploadAdapter,
    Bold,
    Italic,
    MathType,
    BlockQuote,
    Heading,
    Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload,ImageResizeEditing, ImageResizeHandles,
    Link,
    List,
    Paragraph,
    Alignment
];

ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
            'undo', 'redo',
            '|', 'heading',
            '|', 'alignment',
            '|', 'bold', 'italic',
            '-', // break point
            '|', 'alignment',
            '|', 'MathType', 'ChemType',
            'link', 'uploadImage', 'blockQuote',
            '|', 'bulletedList', 'numberedList',
        ],
    },
    image: {
        toolbar: [
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            '|',
            'toggleImageCaption',
            'imageTextAlternative'
        ]
    },
    mathTypeParameters: {
        serviceProviderProperties: {
            URI: window.location.origin + '/php-services/integration',
            server: 'php'
        }
    },
    language: 'en',
};
