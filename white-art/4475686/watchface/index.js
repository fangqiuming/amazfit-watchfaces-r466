    /*
    ** Watch_Face_Editor tool
    ** watchface js version v2.1.1
    ** Copyright © SashaCX75. All Rights Reserved
    */
   
    try {
    (() => {
        //start of ignored block
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
        //const logger = Logger.getLogger('watchface_SashaCX75');
        const logger = DeviceRuntimeCore.HmLogger.getLogger('watchface_SashaCX75')
        //end of ignored block

        //dynamic modify start

        
        let normal_background_bg_img = ''
        let normal_battery_text_text_img = ''
        let normal_date_img_date_day = ''
        let normal_date_img_date_week_img = ''
        let normal_digital_clock_img_time = ''
        let normal_analog_clock_time_pointer_hour = ''
        let normal_analog_clock_time_pointer_minute = ''
        let normal_analog_clock_time_pointer_second = ''
        let idle_background_bg_img = ''
        let idle_battery_text_text_img = ''
        let idle_date_img_date_day = ''
        let idle_date_img_date_week_img = ''
        let idle_digital_clock_img_time = ''
        let idle_analog_clock_time_pointer_hour = ''
        let idle_analog_clock_time_pointer_minute = ''
        let normal_battery_jumpable_img_click = ''
        let normal_countdown_jumpable_img_click = ''
        let normal_stopwatch_jumpable_img_click = ''
        let Button_1 = ''


        //dynamic modify end

        __$$module$$__.module = DeviceRuntimeCore.WatchFace({
            init_view() {
                //dynamic modify start
                    
                
            console.log('Watch_Face.ScreenNormal');
            normal_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 466,
              h: 466,
              src: 'bg.png',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 206,
              y: 272,
              font_array: ["date_0.png","date_1.png","date_2.png","date_3.png","date_4.png","date_5.png","date_6.png","date_7.png","date_8.png","date_9.png"],
              padding: false,
              h_space: 0,
              unit_sc: 'dateunit.png',
              unit_tc: 'dateunit.png',
              unit_en: 'dateunit.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              day_startX: 216,
              day_startY: 184,
              day_sc_array: ["date_0.png","date_1.png","date_2.png","date_3.png","date_4.png","date_5.png","date_6.png","date_7.png","date_8.png","date_9.png"],
              day_tc_array: ["date_0.png","date_1.png","date_2.png","date_3.png","date_4.png","date_5.png","date_6.png","date_7.png","date_8.png","date_9.png"],
              day_en_array: ["date_0.png","date_1.png","date_2.png","date_3.png","date_4.png","date_5.png","date_6.png","date_7.png","date_8.png","date_9.png"],
              day_zero: 1,
              day_space: 0,
              day_align: hmUI.align.CENTER_H,
              day_is_character: false,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 211,
              y: 150,
              week_en: ["week_1.png","week_2.png","week_3.png","week_4.png","week_5.png","week_6.png","week_7.png"],
              week_tc: ["week_1.png","week_2.png","week_3.png","week_4.png","week_5.png","week_6.png","week_7.png"],
              week_sc: ["week_1.png","week_2.png","week_3.png","week_4.png","week_5.png","week_6.png","week_7.png"],
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 180,
              hour_startY: 218,
              hour_array: ["time_0.png","time_1.png","time_2.png","time_3.png","time_4.png","time_5.png","time_6.png","time_7.png","time_8.png","time_9.png"],
              hour_zero: 1,
              hour_space: 0,
              hour_angle: 0,
              hour_align: hmUI.align.LEFT,

              minute_startX: 244,
              minute_startY: 218,
              minute_array: ["time_0.png","time_1.png","time_2.png","time_3.png","time_4.png","time_5.png","time_6.png","time_7.png","time_8.png","time_9.png"],
              minute_zero: 1,
              minute_space: 0,
              minute_angle: 0,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_analog_clock_time_pointer_hour = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
              hour_path: 'h.png',
              hour_centerX: 233,
              hour_centerY: 233,
              hour_posX: 19,
              hour_posY: 233,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_analog_clock_time_pointer_minute = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
              minute_path: 'm.png',
              minute_centerX: 233,
              minute_centerY: 233,
              minute_posX: 19,
              minute_posY: 233,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_analog_clock_time_pointer_second = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
              second_path: 's.png',
              second_centerX: 233,
              second_centerY: 233,
              second_posX: 19,
              second_posY: 233,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });


            console.log('Watch_Face.ScreenAOD');
            idle_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 466,
              h: 466,
              src: 'aod.png',
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 206,
              y: 272,
              font_array: ["dateaod_0.png","dateaod_1.png","dateaod_2.png","dateaod_3.png","dateaod_4.png","dateaod_5.png","dateaod_6.png","dateaod_7.png","dateaod_8.png","dateaod_9.png"],
              padding: false,
              h_space: 0,
              unit_sc: 'dateaodunit.png',
              unit_tc: 'dateaodunit.png',
              unit_en: 'dateaodunit.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              day_startX: 216,
              day_startY: 184,
              day_sc_array: ["dateaod_0.png","dateaod_1.png","dateaod_2.png","dateaod_3.png","dateaod_4.png","dateaod_5.png","dateaod_6.png","dateaod_7.png","dateaod_8.png","dateaod_9.png"],
              day_tc_array: ["dateaod_0.png","dateaod_1.png","dateaod_2.png","dateaod_3.png","dateaod_4.png","dateaod_5.png","dateaod_6.png","dateaod_7.png","dateaod_8.png","dateaod_9.png"],
              day_en_array: ["dateaod_0.png","dateaod_1.png","dateaod_2.png","dateaod_3.png","dateaod_4.png","dateaod_5.png","dateaod_6.png","dateaod_7.png","dateaod_8.png","dateaod_9.png"],
              day_zero: 1,
              day_space: 0,
              day_align: hmUI.align.CENTER_H,
              day_is_character: false,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 211,
              y: 150,
              week_en: ["weekaod_1.png","weekaod_2.png","weekaod_3.png","weekaod_4.png","weekaod_5.png","weekaod_6.png","weekaod_7.png"],
              week_tc: ["weekaod_1.png","weekaod_2.png","weekaod_3.png","weekaod_4.png","weekaod_5.png","weekaod_6.png","weekaod_7.png"],
              week_sc: ["weekaod_1.png","weekaod_2.png","weekaod_3.png","weekaod_4.png","weekaod_5.png","weekaod_6.png","weekaod_7.png"],
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 180,
              hour_startY: 218,
              hour_array: ["timeaod_0.png","timeaod_1.png","timeaod_2.png","timeaod_3.png","timeaod_4.png","timeaod_5.png","timeaod_6.png","timeaod_7.png","timeaod_8.png","timeaod_9.png"],
              hour_zero: 1,
              hour_space: 0,
              hour_angle: 0,
              hour_align: hmUI.align.LEFT,

              minute_startX: 244,
              minute_startY: 218,
              minute_array: ["timeaod_0.png","timeaod_1.png","timeaod_2.png","timeaod_3.png","timeaod_4.png","timeaod_5.png","timeaod_6.png","timeaod_7.png","timeaod_8.png","timeaod_9.png"],
              minute_zero: 1,
              minute_space: 0,
              minute_angle: 0,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_analog_clock_time_pointer_hour = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
              hour_path: 'h.png',
              hour_centerX: 233,
              hour_centerY: 233,
              hour_posX: 19,
              hour_posY: 233,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_analog_clock_time_pointer_minute = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
              minute_path: 'm.png',
              minute_centerX: 233,
              minute_centerY: 233,
              minute_posX: 19,
              minute_posY: 233,
              show_level: hmUI.show_level.ONLY_AOD,
            });
            console.log('Watch_Face.Shortcuts');

            normal_battery_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 184,
              y: 267,
              w: 97,
              h: 83,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_countdown_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 140,
              y: 206,
              w: 87,
              h: 58,
              type: hmUI.data_type.COUNT_DOWN,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_stopwatch_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 238,
              y: 206,
              w: 87,
              h: 58,
              type: hmUI.data_type.STOP_WATCH,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            console.log('Watch_Face.Buttons');
            Button_1 = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 184,
              y: 121,
              w: 97,
              h: 83,
              text: '',
              color: 0xFFFF8C00,
              text_size: 24,
              press_src: 'Empty.png',
              normal_src: 'Empty.png',
              click_func: (button_widget) => {
                hmApp.startApp({url: 'ScheduleCalScreen', native: true });
              }, // end func
              longpress_func: (button_widget) => {
                hmApp.startApp({url: 'todoListScreen', native: true });
              }, // end func
              show_level: hmUI.show_level.ONLY_NORMAL,
            }); // end button


                //dynamic modify end
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