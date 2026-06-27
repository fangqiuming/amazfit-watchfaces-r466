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
        let normal_frame_animation_1 = ''
        let normal_digital_clock_img_time = ''
        let normal_digital_clock_img_time_AmPm = ''
        let normal_calorie_current_text_img = ''
        let normal_calorie_image_progress_img_level = ''
        let normal_heart_rate_text_text_img = ''
        let normal_heart_rate_image_progress_img_level = ''
        let normal_distance_text_text_img = ''
        let normal_step_current_text_img = ''
        let normal_step_image_progress_img_level = ''
        let normal_date_img_date_day = ''
        let normal_date_img_date_month = ''
        let normal_date_img_date_year = ''
        let normal_date_img_date_week_img = ''
        let normal_battery_text_text_img = ''
        let normal_weather_image_progress_img_level = ''
        let normal_temperature_current_text_img = ''
        let normal_system_disconnect_img = ''
        let normal_system_dnd_img = ''
        let normal_system_clock_img = ''
        let idle_background_bg_img = ''
        let idle_digital_clock_img_time = ''
        let idle_digital_clock_minute_separator_img = ''
        let idle_digital_clock_img_time_AmPm = ''
        let idle_calorie_current_text_img = ''
        let idle_calorie_image_progress_img_level = ''
        let idle_heart_rate_text_text_img = ''
        let idle_heart_rate_image_progress_img_level = ''
        let idle_distance_text_text_img = ''
        let idle_step_current_text_img = ''
        let idle_step_image_progress_img_level = ''
        let idle_date_img_date_day = ''
        let idle_date_img_date_month = ''
        let idle_date_img_date_year = ''
        let idle_date_img_date_week_img = ''
        let idle_battery_text_text_img = ''
        let idle_weather_image_progress_img_level = ''
        let idle_temperature_current_text_img = ''


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
              src: '1.png',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_frame_animation_1 = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
              x: 183,
              y: 118,
              anim_path: "animation",
              anim_ext: "png",
              anim_prefix: "pipboy",
              anim_fps: 8,
              anim_size: 8,
              repeat_count: 0,
              anim_repeat: true,
              anim_status:hmUI.anim_status.START,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 318,
              hour_startY: 128,
              hour_array: ["2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png"],
              hour_zero: 1,
              hour_space: 11,
              hour_angle: 0,
              hour_align: hmUI.align.LEFT,

              minute_startX: 318,
              minute_startY: 239,
              minute_array: ["2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png"],
              minute_zero: 1,
              minute_space: 11,
              minute_angle: 0,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              second_startX: 360,
              second_startY: 338,
              second_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              second_zero: 1,
              second_space: 3,
              second_angle: 0,
              second_follow: 0,
              second_align: hmUI.align.CENTER_H,

              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_digital_clock_img_time_AmPm = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              am_x: 355,
              am_y: 360,
              am_sc_path: '22.png',
              am_en_path: '22.png',
              pm_x: 355,
              pm_y: 360,
              pm_sc_path: '23.png',
              pm_en_path: '23.png',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_calorie_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 28,
              y: 148,
              font_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              padding: false,
              h_space: 1,
              align_h: hmUI.align.RIGHT,
              type: hmUI.data_type.CAL,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_calorie_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 89,
              y: 157,
              image_array: ["24.png","25.png","26.png","27.png","28.png","29.png"],
              image_length: 6,
              type: hmUI.data_type.CAL,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_heart_rate_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 21,
              y: 211,
              font_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              padding: false,
              h_space: 2,
              invalid_image: '30.png',
              align_h: hmUI.align.RIGHT,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_heart_rate_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 75,
              y: 221,
              image_array: ["31.png","32.png","33.png","34.png","35.png","36.png"],
              image_length: 6,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 22,
              y: 268,
              font_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              padding: false,
              h_space: 0,
              dot_image: '37.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.DISTANCE,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 200,
              y: 358,
              font_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              padding: false,
              h_space: 3,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 193,
              y: 345,
              image_array: ["38.png","39.png","40.png","41.png","42.png","43.png","44.png","45.png","46.png","47.png"],
              image_length: 10,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              day_startX: 75,
              day_startY: 76,
              day_sc_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              day_tc_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              day_en_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              day_zero: 1,
              day_space: 0,
              day_align: hmUI.align.CENTER_H,
              day_is_character: false,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_month = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              month_startX: 108,
              month_startY: 76,
              month_sc_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              month_tc_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              month_en_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              month_zero: 1,
              month_space: 0,
              month_align: hmUI.align.LEFT,
              month_is_character: false,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_year = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              year_startX: 140,
              year_startY: 76,
              year_sc_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              year_tc_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              year_en_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              year_zero: 1,
              year_space: 0,
              year_align: hmUI.align.CENTER_H,
              year_is_character: false,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 137,
              y: 23,
              week_en: ["48.png","49.png","50.png","51.png","52.png","53.png","54.png"],
              week_tc: ["48.png","49.png","50.png","51.png","52.png","53.png","54.png"],
              week_sc: ["48.png","49.png","50.png","51.png","52.png","53.png","54.png"],
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 89,
              y: 368,
              font_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              padding: false,
              h_space: 0,
              unit_sc: '55.png',
              unit_tc: '55.png',
              unit_en: '55.png',
              align_h: hmUI.align.RIGHT,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_weather_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 320,
              y: 76,
              image_array: ["56.png","57.png","58.png","59.png","60.png","61.png","62.png","63.png","64.png","65.png","66.png","67.png","68.png","69.png","70.png","71.png","72.png","73.png","74.png","75.png","76.png","77.png","78.png","79.png","80.png","81.png","82.png","83.png","84.png"],
              image_length: 29,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_temperature_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 350,
              y: 80,
              font_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              padding: false,
              h_space: 1,
              unit_sc: '87.png',
              unit_tc: '87.png',
              unit_en: '87.png',
              invalid_image: '85.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_system_disconnect_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 409,
              y: 352,
              src: '88.png',
              type: hmUI.system_status.DISCONNECT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_system_dnd_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 308,
              y: 355,
              src: '89.png',
              type: hmUI.system_status.DISTURB,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_system_clock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 337,
              y: 355,
              src: '90.png',
              type: hmUI.system_status.CLOCK,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });


            console.log('Watch_Face.ScreenAOD');
            idle_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 466,
              h: 466,
              src: '91.png',
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 318,
              hour_startY: 128,
              hour_array: ["2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png"],
              hour_zero: 1,
              hour_space: 11,
              hour_angle: 0,
              hour_align: hmUI.align.LEFT,

              minute_startX: 318,
              minute_startY: 239,
              minute_array: ["2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png"],
              minute_zero: 1,
              minute_space: 11,
              minute_angle: 0,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_digital_clock_minute_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 183,
              y: 118,
              src: '92.png',
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_digital_clock_img_time_AmPm = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              am_x: 355,
              am_y: 360,
              am_sc_path: '22.png',
              am_en_path: '22.png',
              pm_x: 355,
              pm_y: 360,
              pm_sc_path: '23.png',
              pm_en_path: '23.png',
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_calorie_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 28,
              y: 148,
              font_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              padding: false,
              h_space: 1,
              align_h: hmUI.align.RIGHT,
              type: hmUI.data_type.CAL,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_calorie_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 89,
              y: 157,
              image_array: ["24.png","25.png","26.png","27.png","28.png","29.png"],
              image_length: 6,
              type: hmUI.data_type.CAL,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_heart_rate_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 21,
              y: 211,
              font_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              padding: false,
              h_space: 2,
              invalid_image: '93.png',
              align_h: hmUI.align.RIGHT,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_heart_rate_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 75,
              y: 221,
              image_array: ["31.png","32.png","33.png","34.png","35.png","36.png"],
              image_length: 6,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 22,
              y: 268,
              font_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              padding: false,
              h_space: 0,
              dot_image: '37.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.DISTANCE,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 200,
              y: 358,
              font_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              padding: false,
              h_space: 3,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_step_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 193,
              y: 345,
              image_array: ["38.png","39.png","40.png","41.png","42.png","43.png","44.png","45.png","46.png","47.png"],
              image_length: 10,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              day_startX: 75,
              day_startY: 76,
              day_sc_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              day_tc_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              day_en_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              day_zero: 1,
              day_space: 0,
              day_align: hmUI.align.CENTER_H,
              day_is_character: false,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_date_img_date_month = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              month_startX: 108,
              month_startY: 76,
              month_sc_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              month_tc_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              month_en_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              month_zero: 1,
              month_space: 0,
              month_align: hmUI.align.LEFT,
              month_is_character: false,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_date_img_date_year = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              year_startX: 140,
              year_startY: 76,
              year_sc_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              year_tc_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              year_en_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              year_zero: 1,
              year_space: 0,
              year_align: hmUI.align.CENTER_H,
              year_is_character: false,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 137,
              y: 23,
              week_en: ["48.png","49.png","50.png","51.png","52.png","53.png","54.png"],
              week_tc: ["48.png","49.png","50.png","51.png","52.png","53.png","54.png"],
              week_sc: ["48.png","49.png","50.png","51.png","52.png","53.png","54.png"],
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 89,
              y: 368,
              font_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              padding: false,
              h_space: 0,
              unit_sc: '55.png',
              unit_tc: '55.png',
              unit_en: '55.png',
              align_h: hmUI.align.RIGHT,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_weather_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 320,
              y: 76,
              image_array: ["56.png","57.png","58.png","59.png","60.png","61.png","62.png","63.png","64.png","65.png","66.png","67.png","68.png","69.png","70.png","71.png","72.png","73.png","74.png","75.png","76.png","77.png","78.png","79.png","80.png","81.png","82.png","83.png","84.png"],
              image_length: 29,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_temperature_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 350,
              y: 80,
              font_array: ["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"],
              padding: false,
              h_space: 1,
              unit_sc: '87.png',
              unit_tc: '87.png',
              unit_en: '87.png',
              invalid_image: '85.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
              resume_call: (function () {
                console.log('resume_call()');
                normal_frame_animation_1.setProperty(hmUI.prop.ANIM_STATUS,hmUI.anim_status.START);

              }),
              pause_call: (function () {
                console.log('pause_call()');
                normal_frame_animation_1.setProperty(hmUI.prop.ANIM_STATUS,hmUI.anim_status.STOP);

              }),
            });

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