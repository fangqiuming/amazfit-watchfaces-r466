try {
    ((() => {
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
        const logger = Logger.getLogger('watchface');
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
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_val: new Date().getHours(),
                    hour_zero: 1,
                    hour_startX: 76,
                    hour_startY: 80,
                    hour_array: [
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
                    hour_space: 12,
                    hour_align: hmUI.align.CENTER_H,
                    minute_val: new Date().getMinutes(),
                    minute_zero: 1,
                    minute_startX: 166,
                    minute_startY: 80,
                    minute_array: [
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
                    minute_space: 12,
                    minute_align: hmUI.align.CENTER_H,
                    minute_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 150,
                    y: 114,
                    w: 8,
                    h: 55,
                    src: '13.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    month_startX: 117,
                    month_startY: 197,
                    month_sc_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    month_tc_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    month_en_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    month_align: hmUI.align.LEFT,
                    month_zero: 1,
                    month_follow: 0,
                    month_space: 3,
                    month_is_character: false,
                    day_startX: 77,
                    day_startY: 197,
                    day_sc_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    day_tc_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    day_en_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    day_align: hmUI.align.LEFT,
                    day_zero: 1,
                    day_follow: 0,
                    day_space: 3,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 103,
                    y: 197,
                    w: 10,
                    h: 42,
                    src: '24.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 162,
                    y: 286,
                    image_array: [
                        '25.png',
                        '26.png',
                        '27.png',
                        '28.png',
                        '29.png',
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png',
                        '40.png',
                        '41.png',
                        '42.png',
                        '43.png',
                        '44.png',
                        '45.png',
                        '46.png',
                        '47.png',
                        '48.png',
                        '49.png',
                        '50.png',
                        '51.png',
                        '52.png',
                        '53.png'
                    ],
                    image_length: 29,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 315,
                    y: 318,
                    type: hmUI.data_type.STEP,
                    font_array: [
                        '54.png',
                        '55.png',
                        '56.png',
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: 3,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 74,
                    y: 241,
                    image_array: [
                        '64.png',
                        '65.png',
                        '66.png',
                        '67.png',
                        '68.png',
                        '69.png',
                        '70.png',
                        '71.png',
                        '72.png',
                        '73.png'
                    ],
                    image_length: 10,
                    type: hmUI.data_type.BATTERY,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 248,
                    y: 318,
                    type: hmUI.data_type.HEART,
                    font_array: [
                        '74.png',
                        '75.png',
                        '76.png',
                        '77.png',
                        '78.png',
                        '79.png',
                        '80.png',
                        '81.png',
                        '82.png',
                        '83.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: 3,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    invalid_image: '84.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    w: 466,
                    h: 466,
                    src: '85.png',
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_val: new Date().getHours(),
                    hour_zero: 1,
                    hour_startX: 76,
                    hour_startY: 80,
                    hour_array: [
                        '86.png',
                        '87.png',
                        '88.png',
                        '89.png',
                        '90.png',
                        '91.png',
                        '92.png',
                        '93.png',
                        '94.png',
                        '95.png'
                    ],
                    hour_space: 12,
                    hour_align: hmUI.align.CENTER_H,
                    minute_val: new Date().getMinutes(),
                    minute_zero: 1,
                    minute_startX: 166,
                    minute_startY: 80,
                    minute_array: [
                        '86.png',
                        '87.png',
                        '88.png',
                        '89.png',
                        '90.png',
                        '91.png',
                        '92.png',
                        '93.png',
                        '94.png',
                        '95.png'
                    ],
                    minute_space: 12,
                    minute_align: hmUI.align.CENTER_H,
                    minute_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 150,
                    y: 114,
                    w: 8,
                    h: 55,
                    src: '96.png',
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    month_startX: 117,
                    month_startY: 197,
                    month_sc_array: [
                        '97.png',
                        '98.png',
                        '99.png',
                        '100.png',
                        '101.png',
                        '102.png',
                        '103.png',
                        '104.png',
                        '105.png',
                        '106.png'
                    ],
                    month_tc_array: [
                        '97.png',
                        '98.png',
                        '99.png',
                        '100.png',
                        '101.png',
                        '102.png',
                        '103.png',
                        '104.png',
                        '105.png',
                        '106.png'
                    ],
                    month_en_array: [
                        '97.png',
                        '98.png',
                        '99.png',
                        '100.png',
                        '101.png',
                        '102.png',
                        '103.png',
                        '104.png',
                        '105.png',
                        '106.png'
                    ],
                    month_align: hmUI.align.LEFT,
                    month_zero: 1,
                    month_follow: 0,
                    month_space: 3,
                    month_is_character: false,
                    day_startX: 77,
                    day_startY: 197,
                    day_sc_array: [
                        '97.png',
                        '98.png',
                        '99.png',
                        '100.png',
                        '101.png',
                        '102.png',
                        '103.png',
                        '104.png',
                        '105.png',
                        '106.png'
                    ],
                    day_tc_array: [
                        '97.png',
                        '98.png',
                        '99.png',
                        '100.png',
                        '101.png',
                        '102.png',
                        '103.png',
                        '104.png',
                        '105.png',
                        '106.png'
                    ],
                    day_en_array: [
                        '97.png',
                        '98.png',
                        '99.png',
                        '100.png',
                        '101.png',
                        '102.png',
                        '103.png',
                        '104.png',
                        '105.png',
                        '106.png'
                    ],
                    day_align: hmUI.align.LEFT,
                    day_zero: 1,
                    day_follow: 0,
                    day_space: 3,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 104,
                    y: 197,
                    w: 10,
                    h: 42,
                    src: '107.png',
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 74,
                    y: 241,
                    image_array: [
                        '108.png',
                        '109.png',
                        '110.png',
                        '111.png',
                        '112.png',
                        '113.png',
                        '114.png',
                        '115.png',
                        '116.png',
                        '117.png'
                    ],
                    image_length: 10,
                    type: hmUI.data_type.BATTERY,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 162,
                    y: 286,
                    image_array: [
                        '118.png',
                        '119.png',
                        '120.png',
                        '121.png',
                        '122.png',
                        '123.png',
                        '124.png',
                        '125.png',
                        '126.png',
                        '127.png',
                        '128.png',
                        '129.png',
                        '130.png',
                        '131.png',
                        '132.png',
                        '133.png',
                        '134.png',
                        '135.png',
                        '136.png',
                        '137.png',
                        '138.png',
                        '139.png',
                        '140.png',
                        '141.png',
                        '142.png',
                        '143.png',
                        '144.png',
                        '145.png',
                        '146.png'
                    ],
                    image_length: 29,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 315,
                    y: 318,
                    type: hmUI.data_type.STEP,
                    font_array: [
                        '147.png',
                        '148.png',
                        '149.png',
                        '150.png',
                        '151.png',
                        '152.png',
                        '153.png',
                        '154.png',
                        '155.png',
                        '156.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: 3,
                    show_level: hmUI.show_level.ONLY_AOD,
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 248,
                    y: 318,
                    type: hmUI.data_type.HEART,
                    font_array: [
                        '147.png',
                        '148.png',
                        '149.png',
                        '150.png',
                        '151.png',
                        '152.png',
                        '153.png',
                        '154.png',
                        '155.png',
                        '156.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: 3,
                    show_level: hmUI.show_level.ONLY_AOD,
                    invalid_image: '157.png',
                    padding: false,
                    isCharacter: false
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
    })());
} catch (e) {
    console.log('Mini Program Error', e);
    e && e.stack && e.stack.split(/\n/).forEach(i => console.log('error stack', i));
    ;
}