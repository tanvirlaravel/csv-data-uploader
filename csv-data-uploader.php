<?php 
/*
* Plugin Name: CSV Data Uploader
* Plugin URI:  https://www.csv-data-uploader.com
* Description: CSV Data Uploader
* Version:     1.0
* Author:      Tanvir
* Author URI:  https://github.com/tanvirlaravel
* License:     GPL2
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain: csv-data-uploader
*/

add_shortcode("csv-data-uploader", "cdu_display_uploader_form");

function cdu_display_uploader_form(){
    return "<h3>This is csv data uploader form</h3>";
}