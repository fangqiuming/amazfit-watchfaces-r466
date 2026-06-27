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
                    src: '3.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 276,
                    y: 138,
                    image_array: [
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png',
                        '13.png'
                    ],
                    image_length: 10,
                    type: hmUI.data_type.CAL,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 316,
                    y: 337,
                    type: hmUI.data_type.CAL,
                    font_array: [
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
                    align_h: hmUI.align.LEFT,
                    h_space: -3,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    invalid_image: '24.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 266,
                    y: 47,
                    src: '25.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 124,
                    y: 253,
                    src: '26.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 190,
                    y: 22,
                    type: hmUI.data_type.BATTERY,
                    font_array: [
                        '27.png',
                        '28.png',
                        '29.png',
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '38.png',
                    unit_tc: '38.png',
                    unit_en: '38.png',
                    invalid_image: '37.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_POINTER, {
                    src: '39.png',
                    center_x: 233,
                    center_y: 233,
                    x: 9,
                    y: 233,
                    type: hmUI.data_type.BATTERY,
                    start_angle: 123,
                    end_angle: 62,
                    cover_x: 0,
                    cover_y: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_STATUS, {
                    x: 211,
                    y: 53,
                    src: '40.png',
                    type: hmUI.system_status.DISCONNECT,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_STATUS, {
                    x: 110,
                    y: 53,
                    src: '41.png',
                    type: hmUI.system_status.DISTURB,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_STATUS, {
                    x: 160,
                    y: 53,
                    src: '42.png',
                    type: hmUI.system_status.LOCK,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_STATUS, {
                    x: 261,
                    y: 53,
                    src: '43.png',
                    type: hmUI.system_status.CLOCK,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 186,
                    y: 362,
                    type: hmUI.data_type.STEP,
                    font_array: [
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
                    align_h: hmUI.align.CENTER_H,
                    h_space: -2,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    invalid_image: '54.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_POINTER, {
                    src: '55.png',
                    center_x: 231,
                    center_y: 360,
                    x: 58,
                    y: 58,
                    type: hmUI.data_type.STEP,
                    start_angle: 0,
                    end_angle: 360,
                    cover_x: 0,
                    cover_y: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 312,
                    y: 92,
                    image_array: [
                        '56.png',
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png',
                        '67.png',
                        '68.png',
                        '69.png',
                        '70.png',
                        '71.png',
                        '72.png',
                        '73.png',
                        '74.png',
                        '75.png',
                        '76.png',
                        '77.png',
                        '78.png',
                        '79.png',
                        '80.png',
                        '81.png',
                        '82.png',
                        '83.png',
                        '84.png'
                    ],
                    image_length: 29,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 233,
                    y: 104,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    font_array: [
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
                    align_h: hmUI.align.RIGHT,
                    h_space: -3,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '87.png',
                    unit_tc: '87.png',
                    unit_en: '87.png',
                    negative_image: '86.png',
                    invalid_image: '85.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 136,
                    y: 146,
                    type: hmUI.data_type.SUN_SET,
                    font_array: [
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
                    align_h: hmUI.align.LEFT,
                    h_space: -2,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    dot_image: '89.png',
                    invalid_image: '88.png',
                    padding: true,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 57,
                    y: 325,
                    type: hmUI.data_type.DISTANCE,
                    font_array: [
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
                    align_h: hmUI.align.CENTER_H,
                    h_space: -3,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    dot_image: '91.png',
                    invalid_image: '90.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 101,
                    y: 385,
                    type: hmUI.data_type.HEART,
                    font_array: [
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
                    align_h: hmUI.align.CENTER_H,
                    h_space: -3,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    invalid_image: '92.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    month_startX: 31,
                    month_startY: 190,
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
                    month_space: -2,
                    month_is_character: false,
                    day_startX: 84,
                    day_startY: 190,
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
                    day_space: -2,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: 348,
                    y: 132,
                    week_en: [
                        '93.png',
                        '94.png',
                        '95.png',
                        '96.png',
                        '97.png',
                        '98.png',
                        '99.png'
                    ],
                    week_sc: [
                        '100.png',
                        '101.png',
                        '102.png',
                        '103.png',
                        '104.png',
                        '105.png',
                        '106.png'
                    ],
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 1,
                    hour_startX: 24,
                    hour_startY: 265,
                    hour_array: [
                        '107.png',
                        '108.png',
                        '109.png',
                        '110.png',
                        '111.png',
                        '112.png',
                        '113.png',
                        '114.png',
                        '115.png',
                        '116.png'
                    ],
                    hour_space: -1,
                    hour_align: hmUI.align.LEFT,
                    minute_zero: 1,
                    minute_startX: 86,
                    minute_startY: 265,
                    minute_array: [
                        '107.png',
                        '108.png',
                        '109.png',
                        '110.png',
                        '111.png',
                        '112.png',
                        '113.png',
                        '114.png',
                        '115.png',
                        '116.png'
                    ],
                    minute_space: -1,
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TIME_POINTER, {
                    hour_centerX: 233,
                    hour_centerY: 233,
                    hour_posX: 22,
                    hour_posY: 233,
                    hour_path: '117.png',
                    hour_cover_x: 0,
                    hour_cover_y: 0,
                    minute_centerX: 233,
                    minute_centerY: 233,
                    minute_posX: 22,
                    minute_posY: 233,
                    minute_path: '118.png',
                    minute_cover_x: 0,
                    minute_cover_y: 0,
                    second_centerX: 233,
                    second_centerY: 233,
                    second_posX: 25,
                    second_posY: 233,
                    second_path: '119.png',
                    second_cover_x: 0,
                    second_cover_y: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    w: 466,
                    h: 466,
                    src: '120.png',
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 190,
                    y: 22,
                    type: hmUI.data_type.BATTERY,
                    font_array: [
                        '27.png',
                        '28.png',
                        '29.png',
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_AOD,
                    unit_sc: '122.png',
                    unit_tc: '122.png',
                    unit_en: '122.png',
                    invalid_image: '121.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 186,
                    y: 362,
                    type: hmUI.data_type.STEP,
                    font_array: [
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
                    align_h: hmUI.align.CENTER_H,
                    h_space: -2,
                    show_level: hmUI.show_level.ONLY_AOD,
                    invalid_image: '123.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 312,
                    y: 92,
                    image_array: [
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
                        '146.png',
                        '147.png',
                        '148.png',
                        '149.png',
                        '150.png',
                        '151.png',
                        '152.png'
                    ],
                    image_length: 29,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 233,
                    y: 104,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    font_array: [
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
                    align_h: hmUI.align.RIGHT,
                    h_space: -3,
                    show_level: hmUI.show_level.ONLY_AOD,
                    unit_sc: '155.png',
                    unit_tc: '155.png',
                    unit_en: '155.png',
                    negative_image: '154.png',
                    invalid_image: '153.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 57,
                    y: 325,
                    type: hmUI.data_type.DISTANCE,
                    font_array: [
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
                    align_h: hmUI.align.CENTER_H,
                    h_space: -3,
                    show_level: hmUI.show_level.ONLY_AOD,
                    dot_image: '157.png',
                    invalid_image: '156.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 101,
                    y: 385,
                    type: hmUI.data_type.HEART,
                    font_array: [
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
                    align_h: hmUI.align.CENTER_H,
                    h_space: -3,
                    show_level: hmUI.show_level.ONLY_AOD,
                    invalid_image: '158.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 317,
                    y: 335,
                    type: hmUI.data_type.CAL,
                    font_array: [
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
                    align_h: hmUI.align.LEFT,
                    h_space: -3,
                    show_level: hmUI.show_level.ONLY_AOD,
                    invalid_image: '159.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    month_startX: 31,
                    month_startY: 190,
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
                    month_space: -2,
                    month_is_character: false,
                    day_startX: 84,
                    day_startY: 190,
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
                    day_space: -2,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 1,
                    hour_startX: 24,
                    hour_startY: 265,
                    hour_array: [
                        '107.png',
                        '108.png',
                        '109.png',
                        '110.png',
                        '111.png',
                        '112.png',
                        '113.png',
                        '114.png',
                        '115.png',
                        '116.png'
                    ],
                    hour_space: -1,
                    hour_align: hmUI.align.LEFT,
                    minute_zero: 1,
                    minute_startX: 86,
                    minute_startY: 265,
                    minute_array: [
                        '107.png',
                        '108.png',
                        '109.png',
                        '110.png',
                        '111.png',
                        '112.png',
                        '113.png',
                        '114.png',
                        '115.png',
                        '116.png'
                    ],
                    minute_space: -1,
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.TIME_POINTER, {
                    hour_centerX: 233,
                    hour_centerY: 233,
                    hour_posX: 22,
                    hour_posY: 233,
                    hour_path: '160.png',
                    hour_cover_x: 0,
                    hour_cover_y: 0,
                    minute_centerX: 233,
                    minute_centerY: 233,
                    minute_posX: 22,
                    minute_posY: 233,
                    minute_path: '162.png',
                    minute_cover_path: '161.png',
                    minute_cover_x: 216,
                    minute_cover_y: 216,
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
    })());
} catch (e) {
    console.log('Mini Program Error', e);
    e && e.stack && e.stack.split(/\n/).forEach(i => console.log('error stack', i));
    ;
}