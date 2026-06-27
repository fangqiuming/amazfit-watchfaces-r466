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
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 166,
                    y: 292,
                    type: hmUI.data_type.WEATHER_CURRENT,
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
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '15.png',
                    unit_tc: '15.png',
                    unit_en: '15.png',
                    negative_image: '14.png',
                    invalid_image: '13.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 166,
                    y: 262,
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
                    align_h: hmUI.align.LEFT,
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '17.png',
                    unit_tc: '17.png',
                    unit_en: '17.png',
                    invalid_image: '16.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 165,
                    y: 232,
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
                    align_h: hmUI.align.LEFT,
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '18.png',
                    unit_tc: '18.png',
                    unit_en: '18.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 165,
                    y: 202,
                    type: hmUI.data_type.BATTERY,
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
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '19.png',
                    unit_tc: '19.png',
                    unit_en: '19.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    year_startX: 250,
                    year_startY: 172,
                    year_sc_array: [
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
                    year_tc_array: [
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
                    year_en_array: [
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
                    year_align: hmUI.align.LEFT,
                    year_zero: 0,
                    year_space: 0,
                    year_is_character: false,
                    month_startX: 207,
                    month_startY: 172,
                    month_sc_array: [
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
                    month_tc_array: [
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
                    month_en_array: [
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
                    month_unit_sc: '20.png',
                    month_unit_tc: '20.png',
                    month_unit_en: '20.png',
                    month_align: hmUI.align.LEFT,
                    month_zero: 1,
                    month_follow: 0,
                    month_space: 0,
                    month_is_character: false,
                    day_startX: 165,
                    day_startY: 172,
                    day_sc_array: [
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
                    day_tc_array: [
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
                    day_en_array: [
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
                    day_unit_sc: '21.png',
                    day_unit_tc: '21.png',
                    day_unit_en: '21.png',
                    day_align: hmUI.align.LEFT,
                    day_zero: 1,
                    day_follow: 0,
                    day_space: 0,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 1,
                    hour_startX: 165,
                    hour_startY: 142,
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
                    hour_space: 0,
                    hour_unit_sc: '22.png',
                    hour_unit_tc: '22.png',
                    hour_unit_en: '22.png',
                    hour_align: hmUI.align.LEFT,
                    minute_zero: 1,
                    minute_startX: 208,
                    minute_startY: 142,
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
                    minute_space: 0,
                    minute_unit_sc: '23.png',
                    minute_unit_tc: '23.png',
                    minute_unit_en: '23.png',
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    second_zero: 1,
                    second_startX: 250,
                    second_startY: 142,
                    second_array: [
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
                    second_space: 0,
                    second_align: hmUI.align.LEFT,
                    second_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_ANIM, {
                    x: 194,
                    y: 355,
                    anim_path: '',
                    anim_prefix: 'first_anim_etzns',
                    anim_ext: 'png',
                    anim_fps: 8,
                    anim_size: 2,
                    display_on_restart: false,
                    repeat_count: 0,
                    anim_status: hmUI.anim_status.START,
                    show_level: hmUI.show_level.ONLY_NORMAL
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