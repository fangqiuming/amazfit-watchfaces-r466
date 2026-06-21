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
        const { px } = __$$app$$__.__globals__;
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
                }); // Background
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 1,
                    hour_startX: 107,
                    hour_startY: 141,
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
                    hour_space: -3,
                    hour_unit_sc: '13.png',
                    hour_unit_tc: '13.png',
                    hour_unit_en: '13.png',
                    hour_align: hmUI.align.LEFT,
                    minute_zero: 1,
                    minute_startX: 216,
                    minute_startY: 141,
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
                    minute_space: -3,
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    second_zero: 1,
                    second_startX: 323,
                    second_startY: 142,
                    second_array: [
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
                    second_space: -2,
                    second_align: hmUI.align.LEFT,
                    second_follow: 0,
                    am_x: 318,
                    am_y: 169,
                    am_sc_path: '24.png',
                    am_en_path: '25.png',
                    pm_x: 318,
                    pm_y: 169,
                    pm_sc_path: '26.png',
                    pm_en_path: '27.png',
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Time (Normal Mode)
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 194,
                    y: 33,
                    image_array: [
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
                        '53.png',
                        '54.png',
                        '55.png',
                        '56.png'
                    ],
                    image_length: 29,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Weather Icon
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 237,
                    y: 44,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.LEFT,
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '69.png',
                    unit_tc: '69.png',
                    unit_en: '69.png',
                    negative_image: '68.png',
                    invalid_image: '67.png',
                    padding: false,
                    isCharacter: false
                }); // Current Temperature
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 258,
                    y: 81,
                    type: hmUI.data_type.WEATHER_HIGH,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.LEFT,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '72.png',
                    unit_tc: '72.png',
                    unit_en: '72.png',
                    negative_image: '71.png',
                    invalid_image: '70.png',
                    padding: false,
                    isCharacter: false
                }); // High Temperature
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 185,
                    y: 81,
                    type: hmUI.data_type.WEATHER_LOW,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.LEFT,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '75.png',
                    unit_tc: '75.png',
                    unit_en: '75.png',
                    negative_image: '74.png',
                    invalid_image: '73.png',
                    padding: false,
                    isCharacter: false
                }); // Low Temperature
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 62,
                    y: 81,
                    w: 100,
                    type: hmUI.data_type.AQI,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    invalid_image: '76.png',
                    padding: false,
                    isCharacter: false
                }); // Air Quality Index (AQI)
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 338,
                    y: 81,
                    type: hmUI.data_type.UVI,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    invalid_image: '76.png',
                    padding: false,
                    isCharacter: false
                }); // UV Index
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 28,
                    y: 202,
                    type: hmUI.data_type.SUN_RISE,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.LEFT,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    dot_image: '78.png',
                    invalid_image: '77.png',
                    padding: true,
                    isCharacter: false
                }); // Sunrise Time
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 362,
                    y: 202,
                    type: hmUI.data_type.SUN_SET,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.LEFT,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    dot_image: '80.png',
                    invalid_image: '79.png',
                    padding: true,
                    isCharacter: false
                }); // Sunset Time
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 176,
                    y: 327,
                    image_array: [
                        '81.png',
                        '82.png',
                        '83.png',
                        '84.png',
                        '85.png',
                        '86.png'
                    ],
                    image_length: 6,
                    type: hmUI.data_type.STEP,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Step Progress Icon
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 195,
                    y: 304,
                    type: hmUI.data_type.STEP,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    padding: false,
                    isCharacter: false
                }); // Step Count
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 183,
                    y: 352,
                    type: hmUI.data_type.DISTANCE,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '88.png',
                    unit_tc: '88.png',
                    unit_en: '88.png',
                    imperial_unit_sc: '89.png',
                    imperial_unit_tc: '89.png',
                    imperial_unit_en: '89.png',
                    dot_image: '87.png',
                    padding: false,
                    isCharacter: false
                }); // Distance
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 58,
                    y: 258,
                    image_array: [
                        '90.png',
                        '91.png',
                        '92.png',
                        '93.png',
                        '94.png',
                        '95.png',
                        '96.png',
                        '97.png',
                        '98.png',
                        '99.png'
                    ],
                    image_length: 10,
                    type: hmUI.data_type.HEART,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Heart Rate Icon
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 85,
                    y: 304,
                    type: hmUI.data_type.HEART,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    invalid_image: '100.png',
                    padding: false,
                    isCharacter: false
                }); // Heart Rate
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 305,
                    y: 258,
                    image_array: [
                        '101.png',
                        '102.png',
                        '103.png',
                        '104.png',
                        '105.png',
                        '106.png',
                        '107.png',
                        '108.png',
                        '109.png',
                        '110.png'
                    ],
                    image_length: 10,
                    type: hmUI.data_type.CAL,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Calories Icon
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 326,
                    y: 304,
                    type: hmUI.data_type.CAL,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    padding: false,
                    isCharacter: false
                }); // Calories
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 22,
                    y: 310,
                    image_array: [
                        '111.png',
                        '112.png',
                        '113.png',
                        '114.png',
                        '115.png',
                        '116.png',
                        '117.png',
                        '118.png',
                        '119.png',
                        '120.png'
                    ],
                    image_length: 10,
                    type: hmUI.data_type.BATTERY,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Battery Icon
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 200,
                    y: 424,
                    type: hmUI.data_type.BATTERY,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: -1,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '121.png',
                    unit_tc: '121.png',
                    unit_en: '121.png',
                    padding: false,
                    isCharacter: false
                }); // Battery Percentage
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    month_startX: 93,
                    month_startY: 0,
                    month_en_array: [
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
                        '133.png'
                    ],
                    month_align: hmUI.align.LEFT,
                    month_zero: 0,
                    month_follow: 0,
                    month_space: 0,
                    month_is_character: true,
                    day_startX: 247,
                    day_startY: 230,
                    day_sc_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    day_tc_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    day_en_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    day_align: hmUI.align.LEFT,
                    day_zero: 1,
                    day_follow: 0,
                    day_space: -1,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Date (Month and Day)
                hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: 174,
                    y: 226,
                    week_en: [
                        '134.png',
                        '135.png',
                        '136.png',
                        '137.png',
                        '138.png',
                        '139.png',
                        '140.png'
                    ],
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Weekday
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 1,
                    hour_startX: 132,
                    hour_startY: 209,
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
                    hour_space: -3,
                    hour_unit_sc: '141.png',
                    hour_unit_tc: '141.png',
                    hour_unit_en: '141.png',
                    hour_align: hmUI.align.LEFT,
                    minute_zero: 1,
                    minute_startX: 242,
                    minute_startY: 209,
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
                    minute_space: -3,
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                }); // Time (AOD Mode)
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 52,
                    y: 30,
                    w: 362,
                    h: 80,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Weather Clickable
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 20,
                    y: 195,
                    w: 80,
                    h: 44,
                    type: hmUI.data_type.SUN_CURRENT,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Sunrise/Sunset Clickable
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 355,
                    y: 195,
                    w: 80,
                    h: 44,
                    type: hmUI.data_type.SUN_CURRENT,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Sunrise/Sunset Clickable
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 50,
                    y: 250,
                    w: 90,
                    h: 80,
                    type: hmUI.data_type.HEART,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Heart Rate Clickable
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 165,
                    y: 295,
                    w: 120,
                    h: 90,
                    type: hmUI.data_type.STEP,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Step Clickable
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 295,
                    y: 250,
                    w: 90,
                    h: 80,
                    type: hmUI.data_type.CAL,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Calories Clickable
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 175,
                    y: 410,
                    w: 110,
                    h: 50,
                    type: hmUI.data_type.BATTERY,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Battery Clickable
                const dateClick = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 160,
                    y: 215,
                    w: 140,
                    h: 50,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }); // Date Clickable
                dateClick.addEventListener(hmUI.event.CLICK_UP, () => {
                    try {
                        hmApp.startApp({
                            url: 'ScheduleCalScreen',
                            native: true
                        });
                    } catch (e) { }
                });
            }, onInit() {
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