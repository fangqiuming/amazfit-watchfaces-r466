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
        let normal_heart_rate_text_text_img = ''
        let normal_weather_image_progress_img_level = ''
        let normal_temperature_current_text_img = ''
        let normal_calorie_current_text_img = ''
        let normal_distance_text_text_img = ''
        let normal_system_disconnect_img = ''
        let normal_system_clock_img = ''
        let normal_step_current_text_img = ''
        let normal_step_image_progress_img_level = ''
        let normal_battery_text_text_img = ''
        let normal_battery_image_progress_img_level = ''
        let normal_date_img_date_month_img = ''
        let normal_date_img_date_week_img = ''
        let normal_date_img_date_day = ''
        let normal_digital_clock_img_time = ''
        let idle_background_bg_img = ''
        let idle_heart_rate_text_text_img = ''
        let idle_weather_image_progress_img_level = ''
        let idle_temperature_current_text_img = ''
        let idle_calorie_current_text_img = ''
        let idle_distance_text_text_img = ''
        let idle_step_current_text_img = ''
        let idle_step_image_progress_img_level = ''
        let idle_battery_text_text_img = ''
        let idle_battery_image_progress_img_level = ''
        let idle_image_img = ''
        let idle_date_img_date_month_img = ''
        let idle_date_img_date_week_img = ''
        let idle_system_disconnect_img = ''
        let idle_system_clock_img = ''
        let idle_date_img_date_day = ''
        let idle_digital_clock_img_time = ''
        let normal_walking_jumpable_img_click = ''
        let normal_countdown_jumpable_img_click = ''
        let normal_stopwatch_jumpable_img_click = ''
        let normal_alarm_jumpable_img_click = ''
        let Button_1 = ''
        let Button_2 = ''


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
              src: '0001.png',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_heart_rate_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 108,
              y: 117,
              font_array: ["0052.png","0053.png","0054.png","0055.png","0056.png","0057.png","0058.png","0059.png","0060.png","0061.png"],
              padding: false,
              h_space: 0,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_weather_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 51,
              y: 210,
              image_array: ["0155.png","0156.png","0157.png","0158.png","0159.png","0160.png","0161.png","0162.png","0163.png","0164.png","0165.png","0166.png","0167.png","0168.png","0169.png","0170.png","0171.png","0172.png","0173.png","0174.png","0175.png","0176.png","0177.png","0178.png","0179.png","0180.png","0181.png","0182.png","0183.png"],
              image_length: 29,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_temperature_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 90,
              y: 215,
              font_array: ["t00.png","t01.png","t02.png","t03.png","t04.png","t05.png","t06.png","t07.png","t08.png","t09.png"],
              padding: false,
              h_space: -7,
              unit_sc: 'tdegree.png',
              unit_tc: 'tdegree.png',
              unit_en: 'tdegree.png',
              imperial_unit_sc: 'tdegree.png',
              imperial_unit_tc: 'tdegree.png',
              imperial_unit_en: 'tdegree.png',
              negative_image: 'tminus.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            const temperatureUnit = hmSetting.getTemperatureUnit();
            //#region temperatureUnit
            if (temperatureUnit == 1) {
              normal_temperature_current_text_img.setProperty(hmUI.prop.MORE, {
                x: 90,
                y: 215,
                font_array: ["t00.png","t01.png","t02.png","t03.png","t04.png","t05.png","t06.png","t07.png","t08.png","t09.png"],
                padding: false,
                h_space: -7,
                unit_sc: 'tdegree.png',
                unit_tc: 'tdegree.png',
                unit_en: 'tdegree.png',
                imperial_unit_sc: 'tdegree.png',
                imperial_unit_tc: 'tdegree.png',
                imperial_unit_en: 'tdegree.png',
                negative_image: 'tminus.png',
                align_h: hmUI.align.CENTER_H,
                type: hmUI.data_type.WEATHER_CURRENT,
                show_level: hmUI.show_level.ONLY_NORMAL,
              });
            };
            //#endregion

            normal_calorie_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 301,
              y: 170,
              font_array: ["d00.png","d01.png","d02.png","d03.png","d04.png","d05.png","d06.png","d07.png","d08.png","d09.png"],
              padding: false,
              h_space: 0,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.CAL,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 299,
              y: 140,
              font_array: ["d00.png","d01.png","d02.png","d03.png","d04.png","d05.png","d06.png","d07.png","d08.png","d09.png"],
              padding: false,
              h_space: -1,
              dot_image: 'd11.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.DISTANCE,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_system_disconnect_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 167,
              y: 394,
              src: 'connect.png',
              type: hmUI.system_status.DISCONNECT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_system_clock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 167,
              y: 41,
              src: 'alarm1.png',
              type: hmUI.system_status.CLOCK,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 108,
              y: 154,
              font_array: ["0072.png","0073.png","0074.png","0075.png","0076.png","0077.png","0078.png","0079.png","0080.png","0081.png"],
              padding: true,
              h_space: 2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 278,
              y: 96,
              image_array: ["steps01.png","steps02.png","steps03.png","steps04.png","steps05.png","steps06.png","steps07.png","steps08.png","steps09.png","steps10.png","steps11.png","steps12.png"],
              image_length: 12,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 180,
              y: 117,
              font_array: ["0062.png","0063.png","0064.png","0065.png","0066.png","0067.png","0068.png","0069.png","0070.png","0071.png"],
              padding: true,
              h_space: 0,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_battery_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 106,
              y: 83,
              image_array: ["0042.png","0043.png","0044.png","0045.png","0046.png","0047.png","0048.png","0049.png","0050.png","0051.png"],
              image_length: 10,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_month_img = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              month_startX: 62,
              month_startY: 283,
              month_sc_array: ["0030.png","0031.png","0032.png","0033.png","0034.png","0035.png","0036.png","0037.png","0038.png","0039.png","0040.png","0041.png"],
              month_tc_array: ["0030.png","0031.png","0032.png","0033.png","0034.png","0035.png","0036.png","0037.png","0038.png","0039.png","0040.png","0041.png"],
              month_en_array: ["0030.png","0031.png","0032.png","0033.png","0034.png","0035.png","0036.png","0037.png","0038.png","0039.png","0040.png","0041.png"],
              month_is_character: true ,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 154,
              y: 366,
              week_en: ["0023.png","0024.png","0025.png","0026.png","0027.png","0028.png","0029.png"],
              week_tc: ["0023.png","0024.png","0025.png","0026.png","0027.png","0028.png","0029.png"],
              week_sc: ["0023.png","0024.png","0025.png","0026.png","0027.png","0028.png","0029.png"],
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              day_startX: 69,
              day_startY: 314,
              day_sc_array: ["0013.png","0014.png","0015.png","0016.png","0017.png","0018.png","0019.png","0020.png","0021.png","0022.png"],
              day_tc_array: ["0013.png","0014.png","0015.png","0016.png","0017.png","0018.png","0019.png","0020.png","0021.png","0022.png"],
              day_en_array: ["0013.png","0014.png","0015.png","0016.png","0017.png","0018.png","0019.png","0020.png","0021.png","0022.png"],
              day_zero: 1,
              day_space: 1,
              day_align: hmUI.align.LEFT,
              day_is_character: false,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 142,
              hour_startY: 283,
              hour_array: ["0003.png","0004.png","0005.png","0006.png","0007.png","0008.png","0009.png","0010.png","0011.png","0012.png"],
              hour_zero: 1,
              hour_space: 2,
              hour_angle: 0,
              hour_align: hmUI.align.LEFT,

              minute_startX: 244,
              minute_startY: 283,
              minute_array: ["0003.png","0004.png","0005.png","0006.png","0007.png","0008.png","0009.png","0010.png","0011.png","0012.png"],
              minute_zero: 1,
              minute_space: 2,
              minute_angle: 0,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              second_startX: 336,
              second_startY: 314,
              second_array: ["0013.png","0014.png","0015.png","0016.png","0017.png","0018.png","0019.png","0020.png","0021.png","0022.png"],
              second_zero: 1,
              second_space: 1,
              second_angle: 0,
              second_follow: 0,
              second_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONLY_NORMAL,
            });


            console.log('Watch_Face.ScreenAOD');
            idle_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 466,
              h: 466,
              src: '0001.png',
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_heart_rate_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 108,
              y: 117,
              font_array: ["0052.png","0053.png","0054.png","0055.png","0056.png","0057.png","0058.png","0059.png","0060.png","0061.png"],
              padding: false,
              h_space: 0,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_weather_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 51,
              y: 210,
              image_array: ["0155.png","0156.png","0157.png","0158.png","0159.png","0160.png","0161.png","0162.png","0163.png","0164.png","0165.png","0166.png","0167.png","0168.png","0169.png","0170.png","0171.png","0172.png","0173.png","0174.png","0175.png","0176.png","0177.png","0178.png","0179.png","0180.png","0181.png","0182.png","0183.png"],
              image_length: 29,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_temperature_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 90,
              y: 215,
              font_array: ["t00.png","t01.png","t02.png","t03.png","t04.png","t05.png","t06.png","t07.png","t08.png","t09.png"],
              padding: false,
              h_space: -7,
              unit_sc: 'tdegree.png',
              unit_tc: 'tdegree.png',
              unit_en: 'tdegree.png',
              imperial_unit_sc: 'tdegree.png',
              imperial_unit_tc: 'tdegree.png',
              imperial_unit_en: 'tdegree.png',
              negative_image: 'tminus.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            //#region temperatureUnit
            if (temperatureUnit == 1) {
              idle_temperature_current_text_img.setProperty(hmUI.prop.MORE, {
                x: 90,
                y: 215,
                font_array: ["t00.png","t01.png","t02.png","t03.png","t04.png","t05.png","t06.png","t07.png","t08.png","t09.png"],
                padding: false,
                h_space: -7,
                unit_sc: 'tdegree.png',
                unit_tc: 'tdegree.png',
                unit_en: 'tdegree.png',
                imperial_unit_sc: 'tdegree.png',
                imperial_unit_tc: 'tdegree.png',
                imperial_unit_en: 'tdegree.png',
                negative_image: 'tminus.png',
                align_h: hmUI.align.CENTER_H,
                type: hmUI.data_type.WEATHER_CURRENT,
                show_level: hmUI.show_level.ONLY_AOD,
              });
            };
            //#endregion

            idle_calorie_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 301,
              y: 170,
              font_array: ["d00.png","d01.png","d02.png","d03.png","d04.png","d05.png","d06.png","d07.png","d08.png","d09.png"],
              padding: false,
              h_space: 0,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.CAL,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 301,
              y: 140,
              font_array: ["d00.png","d01.png","d02.png","d03.png","d04.png","d05.png","d06.png","d07.png","d08.png","d09.png"],
              padding: false,
              h_space: -1,
              dot_image: 'd11.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.DISTANCE,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 108,
              y: 154,
              font_array: ["0072.png","0073.png","0074.png","0075.png","0076.png","0077.png","0078.png","0079.png","0080.png","0081.png"],
              padding: true,
              h_space: 2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_step_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 278,
              y: 96,
              image_array: ["steps01.png","steps02.png","steps03.png","steps04.png","steps05.png","steps06.png","steps07.png","steps08.png","steps09.png","steps10.png","steps11.png","steps12.png"],
              image_length: 12,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 180,
              y: 117,
              font_array: ["0062.png","0063.png","0064.png","0065.png","0066.png","0067.png","0068.png","0069.png","0070.png","0071.png"],
              padding: true,
              h_space: 0,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_battery_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 106,
              y: 83,
              image_array: ["0042.png","0043.png","0044.png","0045.png","0046.png","0047.png","0048.png","0049.png","0050.png","0051.png"],
              image_length: 10,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_image_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              src: 'aod_hand_top_1small.png',
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_date_img_date_month_img = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              month_startX: 62,
              month_startY: 283,
              month_sc_array: ["0030.png","0031.png","0032.png","0033.png","0034.png","0035.png","0036.png","0037.png","0038.png","0039.png","0040.png","0041.png"],
              month_tc_array: ["0030.png","0031.png","0032.png","0033.png","0034.png","0035.png","0036.png","0037.png","0038.png","0039.png","0040.png","0041.png"],
              month_en_array: ["0030.png","0031.png","0032.png","0033.png","0034.png","0035.png","0036.png","0037.png","0038.png","0039.png","0040.png","0041.png"],
              month_is_character: true ,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 154,
              y: 366,
              week_en: ["0023.png","0024.png","0025.png","0026.png","0027.png","0028.png","0029.png"],
              week_tc: ["0023.png","0024.png","0025.png","0026.png","0027.png","0028.png","0029.png"],
              week_sc: ["0023.png","0024.png","0025.png","0026.png","0027.png","0028.png","0029.png"],
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_system_disconnect_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 167,
              y: 394,
              src: 'connect.png',
              type: hmUI.system_status.DISCONNECT,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_system_clock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 167,
              y: 41,
              src: 'alarm.png',
              type: hmUI.system_status.CLOCK,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              day_startX: 69,
              day_startY: 314,
              day_sc_array: ["0013.png","0014.png","0015.png","0016.png","0017.png","0018.png","0019.png","0020.png","0021.png","0022.png"],
              day_tc_array: ["0013.png","0014.png","0015.png","0016.png","0017.png","0018.png","0019.png","0020.png","0021.png","0022.png"],
              day_en_array: ["0013.png","0014.png","0015.png","0016.png","0017.png","0018.png","0019.png","0020.png","0021.png","0022.png"],
              day_zero: 1,
              day_space: 1,
              day_align: hmUI.align.LEFT,
              day_is_character: false,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 142,
              hour_startY: 283,
              hour_array: ["0003.png","0004.png","0005.png","0006.png","0007.png","0008.png","0009.png","0010.png","0011.png","0012.png"],
              hour_zero: 1,
              hour_space: 2,
              hour_angle: 0,
              hour_align: hmUI.align.LEFT,

              minute_startX: 244,
              minute_startY: 283,
              minute_array: ["0003.png","0004.png","0005.png","0006.png","0007.png","0008.png","0009.png","0010.png","0011.png","0012.png"],
              minute_zero: 1,
              minute_space: 2,
              minute_angle: 0,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONLY_AOD,
            });
            console.log('Watch_Face.Shortcuts');

            normal_walking_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 51,
              y: 155,
              w: 183,
              h: 39,
              type: hmUI.data_type.WALKING,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_countdown_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 143,
              y: 287,
              w: 183,
              h: 70,
              type: hmUI.data_type.COUNT_DOWN,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_stopwatch_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 338,
              y: 280,
              w: 61,
              h: 83,
              type: hmUI.data_type.STOP_WATCH,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_alarm_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 174,
              y: 15,
              w: 128,
              h: 59,
              type: hmUI.data_type.ALARM_CLOCK,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            console.log('Watch_Face.Buttons');
            Button_1 = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 170,
              y: 398,
              w: 127,
              h: 57,
              text: '',
              color: 0xFFFF8C00,
              text_size: 24,
              press_src: 'blank.png',
              normal_src: 'blank.png',
              click_func: (button_widget) => {
                hmApp.startApp({url: 'FindPhoneScreen', native: true });
              }, // end func
              show_level: hmUI.show_level.ONLY_NORMAL,
            }); // end button

            Button_2 = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 54,
              y: 260,
              w: 81,
              h: 109,
              text: '',
              color: 0xFFFF8C00,
              text_size: 24,
              press_src: 'blank.png',
              normal_src: 'blank.png',
              click_func: (button_widget) => {
                hmApp.startApp({url: 'ScheduleCalScreen', native: true });
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