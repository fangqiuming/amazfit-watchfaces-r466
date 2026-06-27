try {
    (() => {
        const __$$app$$__ = __$$hmAppManager$$__.currentApp;
        function getApp() {
            return __$$app$$__.app;
        }
        function getCurrentPage() {
            return __$$app$$__.current && __$$app$$__.current.module;
        }
        const __$$module$$__ = __$$app$$__.current;
        const h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__));
        const {px} = __$$app$$__.__globals__;
        const logger = Logger.getLogger('watchface6');
        __$$module$$__.module = DeviceRuntimeCore.WatchFace({
            init_view() {
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    w: 466,
                    h: 466,
                    src: '2.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 203,
                    y: 163,
                    type: hmUI.data_type.STEP,
                    font_array: [
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: -10,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    padding: true,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 162,
                    y: 265,
                    image_array: [
                        '13.png',
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png'
                    ],
                    image_length: 9,
                    type: hmUI.data_type.BATTERY,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 148,
                    y: 225,
                    type: hmUI.data_type.CAL,
                    font_array: [
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png'
                    ],
                    align_h: hmUI.align.LEFT,
                    h_space: -12,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    padding: true,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 283,
                    y: 225,
                    type: hmUI.data_type.HEART,
                    font_array: [
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png'
                    ],
                    align_h: hmUI.align.RIGHT,
                    h_space: -12,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    invalid_image: '22.png',
                    padding: true,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TIME_POINTER, {
                    hour_centerX: 233,
                    hour_centerY: 233,
                    hour_posX: 11,
                    hour_posY: 204,
                    hour_path: '23.png',
                    hour_cover_x: 0,
                    hour_cover_y: 0,
                    minute_centerX: 233,
                    minute_centerY: 233,
                    minute_posX: 11,
                    minute_posY: 204,
                    minute_path: '24.png',
                    minute_cover_x: 0,
                    minute_cover_y: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 1,
                    hour_startX: 213,
                    hour_startY: 199,
                    hour_array: [
                        '25.png',
                        '26.png',
                        '27.png',
                        '28.png',
                        '29.png',
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png'
                    ],
                    hour_space: 0,
                    hour_align: hmUI.align.LEFT,
                    minute_zero: 1,
                    minute_startX: 213,
                    minute_startY: 227,
                    minute_array: [
                        '25.png',
                        '26.png',
                        '27.png',
                        '28.png',
                        '29.png',
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png'
                    ],
                    minute_space: 0,
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: 111,
                    y: 112,
                    week_en: [
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png',
                        '40.png',
                        '41.png'
                    ],
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    day_startX: 216,
                    day_startY: 108,
                    day_sc_array: [
                        '42.png',
                        '43.png',
                        '44.png',
                        '45.png',
                        '46.png',
                        '47.png',
                        '48.png',
                        '49.png',
                        '50.png',
                        '51.png'
                    ],
                    day_tc_array: [
                        '42.png',
                        '43.png',
                        '44.png',
                        '45.png',
                        '46.png',
                        '47.png',
                        '48.png',
                        '49.png',
                        '50.png',
                        '51.png'
                    ],
                    day_en_array: [
                        '42.png',
                        '43.png',
                        '44.png',
                        '45.png',
                        '46.png',
                        '47.png',
                        '48.png',
                        '49.png',
                        '50.png',
                        '51.png'
                    ],
                    day_align: hmUI.align.CENTER_H,
                    day_zero: 1,
                    day_follow: 0,
                    day_space: -7,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    w: 466,
                    h: 466,
                    src: '52.png',
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.TIME_POINTER, {
                    hour_centerX: 233,
                    hour_centerY: 233,
                    hour_posX: 11,
                    hour_posY: 204,
                    hour_path: '53.png',
                    hour_cover_x: 0,
                    hour_cover_y: 0,
                    minute_centerX: 233,
                    minute_centerY: 233,
                    minute_posX: 11,
                    minute_posY: 204,
                    minute_path: '54.png',
                    minute_cover_x: 0,
                    minute_cover_y: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
            },
            onInit() {
                logger.log('index page.js on init invoke');
            },
            build() {
                this.init_view();
                logger.log('index page.js on ready invoke');
            },
            onDestroy() {
                logger.log('index page.js on destroy invoke');
            }
        });
        ;
    })();
} catch (e) {
    console.log('Mini Program Error', e);
    e && e.stack && e.stack.split(/\n/).forEach(i => console.log('error stack', i));
    ;
}