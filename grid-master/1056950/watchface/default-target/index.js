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
                    hour_zero: 1,
                    hour_startX: 77,
                    hour_startY: 103,
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
                    hour_space: 7,
                    hour_align: hmUI.align.LEFT,
                    minute_zero: 1,
                    minute_startX: 269,
                    minute_startY: 103,
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
                    minute_space: 7,
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    am_x: 379,
                    am_y: 190,
                    am_sc_path: '13.png',
                    am_en_path: '14.png',
                    pm_x: 379,
                    pm_y: 190,
                    pm_sc_path: '15.png',
                    pm_en_path: '16.png',
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    month_startX: 269,
                    month_startY: 281,
                    month_sc_array: [
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png'
                    ],
                    month_tc_array: [
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png'
                    ],
                    month_en_array: [
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png'
                    ],
                    month_align: hmUI.align.LEFT,
                    month_zero: 1,
                    month_follow: 0,
                    month_space: 7,
                    month_is_character: false,
                    day_startX: 77,
                    day_startY: 281,
                    day_sc_array: [
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png'
                    ],
                    day_tc_array: [
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png'
                    ],
                    day_en_array: [
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png'
                    ],
                    day_align: hmUI.align.LEFT,
                    day_zero: 1,
                    day_follow: 0,
                    day_space: 7,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: 27,
                    y: 234,
                    week_en: [
                        '27.png',
                        '28.png',
                        '29.png',
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png'
                    ],
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 123,
                    y: 419,
                    image_array: [
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png',
                        '40.png',
                        '41.png',
                        '42.png',
                        '43.png'
                    ],
                    image_length: 10,
                    type: hmUI.data_type.BATTERY,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 219,
                    y: 375,
                    type: hmUI.data_type.BATTERY,
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
                    align_h: hmUI.align.LEFT,
                    h_space: 3,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '54.png',
                    unit_tc: '54.png',
                    unit_en: '54.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 123,
                    y: 9,
                    image_array: [
                        '55.png',
                        '56.png',
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png'
                    ],
                    image_length: 10,
                    type: hmUI.data_type.STEP,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 125,
                    y: 53,
                    type: hmUI.data_type.STEP,
                    font_array: [
                        '65.png',
                        '66.png',
                        '67.png',
                        '68.png',
                        '69.png',
                        '70.png',
                        '71.png',
                        '72.png',
                        '73.png',
                        '74.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: 3,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '75.png',
                    unit_tc: '75.png',
                    unit_en: '75.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_STATUS, {
                    x: 219,
                    y: 190,
                    src: '76.png',
                    type: hmUI.system_status.CLOCK,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    src: '77.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    w: 466,
                    h: 466,
                    src: '78.png',
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 1,
                    hour_startX: 77,
                    hour_startY: 103,
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
                    hour_space: 7,
                    hour_align: hmUI.align.LEFT,
                    minute_zero: 1,
                    minute_startX: 269,
                    minute_startY: 103,
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
                    minute_space: 7,
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    am_x: 379,
                    am_y: 190,
                    am_sc_path: '13.png',
                    am_en_path: '14.png',
                    pm_x: 379,
                    pm_y: 190,
                    pm_sc_path: '15.png',
                    pm_en_path: '16.png',
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    month_startX: 269,
                    month_startY: 281,
                    month_sc_array: [
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png'
                    ],
                    month_tc_array: [
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png'
                    ],
                    month_en_array: [
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png'
                    ],
                    month_align: hmUI.align.LEFT,
                    month_zero: 1,
                    month_follow: 0,
                    month_space: 7,
                    month_is_character: false,
                    day_startX: 77,
                    day_startY: 281,
                    day_sc_array: [
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png'
                    ],
                    day_tc_array: [
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png'
                    ],
                    day_en_array: [
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png'
                    ],
                    day_align: hmUI.align.LEFT,
                    day_zero: 1,
                    day_follow: 0,
                    day_space: 7,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: 27,
                    y: 234,
                    week_en: [
                        '27.png',
                        '28.png',
                        '29.png',
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png'
                    ],
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    src: '79.png',
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