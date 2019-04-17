var key = 'la457698';
var userName = '';
var timeoutNow = 100000;
var timeoutTimer;
var vid = document.getElementById("whiskey"); 
var a = false;
var b = false;
var c = false;
var d = false;
var e = false;
var whichAnswer;

var isoCountries = {
    'AF' : 'Afghanistan',
    'AX' : 'Aland Islands',
    'AL' : 'Albania',
    'DZ' : 'Algeria',
    'AS' : 'American Samoa',
    'AD' : 'Andorra',
    'AO' : 'Angola',
    'AI' : 'Anguilla',
    'AQ' : 'Antarctica',
    'AG' : 'Antigua And Barbuda',
    'AR' : 'Argentina',
    'AM' : 'Armenia',
    'AW' : 'Aruba',
    'AU' : 'Australia',
    'AT' : 'Austria',
    'AZ' : 'Azerbaijan',
    'BS' : 'Bahamas',
    'BH' : 'Bahrain',
    'BD' : 'Bangladesh',
    'BB' : 'Barbados',
    'BY' : 'Belarus',
    'BE' : 'Belgium',
    'BZ' : 'Belize',
    'BJ' : 'Benin',
    'BM' : 'Bermuda',
    'BT' : 'Bhutan',
    'BO' : 'Bolivia',
    'BA' : 'Bosnia And Herzegovina',
    'BW' : 'Botswana',
    'BV' : 'Bouvet Island',
    'BR' : 'Brazil',
    'IO' : 'British Indian Ocean Territory',
    'BN' : 'Brunei Darussalam',
    'BG' : 'Bulgaria',
    'BF' : 'Burkina Faso',
    'BI' : 'Burundi',
    'KH' : 'Cambodia',
    'CM' : 'Cameroon',
    'CA' : 'Canada',
    'CV' : 'Cape Verde',
    'KY' : 'Cayman Islands',
    'CF' : 'Central African Republic',
    'TD' : 'Chad',
    'CL' : 'Chile',
    'CN' : 'China',
    'CX' : 'Christmas Island',
    'CC' : 'Cocos (Keeling) Islands',
    'CO' : 'Colombia',
    'KM' : 'Comoros',
    'CG' : 'Congo',
    'CD' : 'Congo, Democratic Republic',
    'CK' : 'Cook Islands',
    'CR' : 'Costa Rica',
    'CI' : 'Cote D\'Ivoire',
    'HR' : 'Croatia',
    'CU' : 'Cuba',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'DJ' : 'Djibouti',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'EC' : 'Ecuador',
    'EG' : 'Egypt',
    'SV' : 'El Salvador',
    'GQ' : 'Equatorial Guinea',
    'ER' : 'Eritrea',
    'EE' : 'Estonia',
    'ET' : 'Ethiopia',
    'FK' : 'Falkland Islands (Malvinas)',
    'FO' : 'Faroe Islands',
    'FJ' : 'Fiji',
    'FI' : 'Finland',
    'FR' : 'France',
    'GF' : 'French Guiana',
    'PF' : 'French Polynesia',
    'TF' : 'French Southern Territories',
    'GA' : 'Gabon',
    'GM' : 'Gambia',
    'GE' : 'Georgia',
    'DE' : 'Germany',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GR' : 'Greece',
    'GL' : 'Greenland',
    'GD' : 'Grenada',
    'GP' : 'Guadeloupe',
    'GU' : 'Guam',
    'GT' : 'Guatemala',
    'GG' : 'Guernsey',
    'GN' : 'Guinea',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HT' : 'Haiti',
    'HM' : 'Heard Island & Mcdonald Islands',
    'VA' : 'Holy See (Vatican City State)',
    'HN' : 'Honduras',
    'HK' : 'Hong Kong',
    'HU' : 'Hungary',
    'IS' : 'Iceland',
    'IN' : 'India',
    'ID' : 'Indonesia',
    'IR' : 'Iran, Islamic Republic Of',
    'IQ' : 'Iraq',
    'IE' : 'Ireland',
    'IM' : 'Isle Of Man',
    'IL' : 'Israel',
    'IT' : 'Italy',
    'JM' : 'Jamaica',
    'JP' : 'Japan',
    'JE' : 'Jersey',
    'JO' : 'Jordan',
    'KZ' : 'Kazakhstan',
    'KE' : 'Kenya',
    'KI' : 'Kiribati',
    'KR' : 'Korea',
    'KW' : 'Kuwait',
    'KG' : 'Kyrgyzstan',
    'LA' : 'Lao People\'s Democratic Republic',
    'LV' : 'Latvia',
    'LB' : 'Lebanon',
    'LS' : 'Lesotho',
    'LR' : 'Liberia',
    'LY' : 'Libyan Arab Jamahiriya',
    'LI' : 'Liechtenstein',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'MO' : 'Macao',
    'MK' : 'Macedonia',
    'MG' : 'Madagascar',
    'MW' : 'Malawi',
    'MY' : 'Malaysia',
    'MV' : 'Maldives',
    'ML' : 'Mali',
    'MT' : 'Malta',
    'MH' : 'Marshall Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MU' : 'Mauritius',
    'YT' : 'Mayotte',
    'MX' : 'Mexico',
    'FM' : 'Micronesia, Federated States Of',
    'MD' : 'Moldova',
    'MC' : 'Monaco',
    'MN' : 'Mongolia',
    'ME' : 'Montenegro',
    'MS' : 'Montserrat',
    'MA' : 'Morocco',
    'MZ' : 'Mozambique',
    'MM' : 'Myanmar',
    'NA' : 'Namibia',
    'NR' : 'Nauru',
    'NP' : 'Nepal',
    'NL' : 'Netherlands',
    'AN' : 'Netherlands Antilles',
    'NC' : 'New Caledonia',
    'NZ' : 'New Zealand',
    'NI' : 'Nicaragua',
    'NE' : 'Niger',
    'NG' : 'Nigeria',
    'NU' : 'Niue',
    'NF' : 'Norfolk Island',
    'MP' : 'Northern Mariana Islands',
    'NO' : 'Norway',
    'OM' : 'Oman',
    'PK' : 'Pakistan',
    'PW' : 'Palau',
    'PS' : 'Palestinian Territory, Occupied',
    'PA' : 'Panama',
    'PG' : 'Papua New Guinea',
    'PY' : 'Paraguay',
    'PE' : 'Peru',
    'PH' : 'Philippines',
    'PN' : 'Pitcairn',
    'PL' : 'Poland',
    'PT' : 'Portugal',
    'PR' : 'Puerto Rico',
    'QA' : 'Qatar',
    'RE' : 'Reunion',
    'RO' : 'Romania',
    'RU' : 'Russian Federation',
    'RW' : 'Rwanda',
    'BL' : 'Saint Barthelemy',
    'SH' : 'Saint Helena',
    'KN' : 'Saint Kitts And Nevis',
    'LC' : 'Saint Lucia',
    'MF' : 'Saint Martin',
    'PM' : 'Saint Pierre And Miquelon',
    'VC' : 'Saint Vincent And Grenadines',
    'WS' : 'Samoa',
    'SM' : 'San Marino',
    'ST' : 'Sao Tome And Principe',
    'SA' : 'Saudi Arabia',
    'SN' : 'Senegal',
    'RS' : 'Serbia',
    'SC' : 'Seychelles',
    'SL' : 'Sierra Leone',
    'SG' : 'Singapore',
    'SK' : 'Slovakia',
    'SI' : 'Slovenia',
    'SB' : 'Solomon Islands',
    'SO' : 'Somalia',
    'ZA' : 'South Africa',
    'GS' : 'South Georgia And Sandwich Isl.',
    'ES' : 'Spain',
    'LK' : 'Sri Lanka',
    'SD' : 'Sudan',
    'SR' : 'Suriname',
    'SJ' : 'Svalbard And Jan Mayen',
    'SZ' : 'Swaziland',
    'SE' : 'Sweden',
    'CH' : 'Switzerland',
    'SY' : 'Syrian Arab Republic',
    'TW' : 'Taiwan',
    'TJ' : 'Tajikistan',
    'TZ' : 'Tanzania',
    'TH' : 'Thailand',
    'TL' : 'Timor-Leste',
    'TG' : 'Togo',
    'TK' : 'Tokelau',
    'TO' : 'Tonga',
    'TT' : 'Trinidad And Tobago',
    'TN' : 'Tunisia',
    'TR' : 'Turkey',
    'TM' : 'Turkmenistan',
    'TC' : 'Turks And Caicos Islands',
    'TV' : 'Tuvalu',
    'UG' : 'Uganda',
    'UA' : 'Ukraine',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'UM' : 'United States Outlying Islands',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VU' : 'Vanuatu',
    'VE' : 'Venezuela',
    'VN' : 'Viet Nam',
    'VG' : 'Virgin Islands, British',
    'VI' : 'Virgin Islands, U.S.',
    'WF' : 'Wallis And Futuna',
    'EH' : 'Western Sahara',
    'YE' : 'Yemen',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
};

$(".enter").click(function(){
    $(".main-container").hide();
    $(".main-container3").show();
});

$(".terms-and-cond").click(function(){
    $(".terms-and-conditions").show();
    $(".terms-close").show();
});

$(".terms-close").click(function(){
    $(".terms-and-conditions").hide();
    $(".terms-close").hide();
});

$(".terms-first").click(function(){
    $(".terms-and-conditions").show();
    $(".terms-close").show();
});



$(".discover").click(function(){
    $(".main-container").hide();
    userName = $('#name').val();
    show_load_screen();
    callback();
    });

function show_load_screen() {
  $("#load_screen").show();
}

function callback(){

  $.ajax({
      type: 'GET',
      url: 'https://api.namsor.com/onomastics/api/json/origin/Elena/'+ userName +'',
      xhrFields: {
        withCredentials: false
      },
      headers: {
        'X-Channel-Secret': '63m6Yx0zLNAM33krdm3SORekGn8CFB',
        'X-Channel-User': 'namsor.com/lauren@hrg.co.uk/134311'
      },
      success: function(data) {

        console.log(getCountryName(data.countryLastName));

        function getCountryName (countryCode) {
            if (isoCountries.hasOwnProperty(countryCode)) {
                return isoCountries[countryCode];
            } else {
                return countryCode;
            }
        }

        $('.surname-reponse').html(getCountryName(data.countryLastName));
        $('#your_name').html(userName);

        setTimeout(function(){
            
        $("#load_screen").hide();
        $(".main-container2").show();
          //cleartimeout, settimeout = 30, start timer function   
          var timeoutNow = 30000;
          clearTimeout(timeoutTimer);
          timeoutTimer = setTimeout("IdleTimeout()", timeoutNow);
          },3000);
        //Origin of your name:

      },
      error: function(data) {
        console.log(data)
      }
    });




    // $.ajax({
    //   type: "GET",
    //   url: 'https://www.behindthename.com/api/lookup.json?name='+ userName +'&key='+key,
    //   error: function (xhr, ajaxOptions, thrownError) {
    //     alert(xhr.status);
    //     alert(thrownError);
    //   },
    //   success: 1,
    //   }).done(function ( data ) {

    //     if(data[0] == undefined){
    //        $(".error-screen").show();
    //       // add some kind of message saying we can't find their name
    //       // add go back to main page code
    //     }
    //     else{

    //     console.log(data[0]);

    //     $("#your_name p" ).append(data[0].name);
    //     //$(".gender" ).append(data[0].gender);

    //      if (data[0].gender == 'm') {
    //        $(".gender").append('Male');
    //     } 
    //     else if(data[0].gender == 'f'){
    //         $(".gender").append('Female');
    //     }
        
    //     if (data[0].gender == 1 ) {
    //           $('.category1').hide();
    //           $('.gender').hide();
    //     }
    //     else {
    //           $('.category1').show();
    //           $('.gender').show();
    //     }
          

    //     for(i = 0; i <= data[0].usages.length - 2; i++){
    //         console.log(i);
    //         $(".resultUsage" ).append(data[0].usages[i].usage_full + ', ');
    //     }
    //     if (data[0].usages.length == 1 ) {
    //           $('.category2').hide();
    //           $('.resultUsage').hide();
    //     }
    //     else {
    //           $('.category2').show();
    //           $('.resultUsage').show();
    //     }
        
    //     // finds the value inside the html box
    //         var str = $("div.resultUsage" ).text();

    //         // slices the last 2 digits (1 for blank and 1 for the ,)
    //     str = str.slice(0, -2);

    //         // replaces the string with a new string
    //     $("div.resultUsage" ).text(str);
            
            
    //     $(".origin" ).append(data[0].usages[data[0].usages.length - 1].usage_full);
    //     //$(".origin_gender" ).append(data[0].usages[data[0].usages.length - 1].usage_gender);


    //     if (data[0].usages[data[0].usages.length - 1].usage_gender == 'm') {
    //        $(".origin_gender").append('Male');
    //     } 
    //     else if(data[0].usages[data[0].usages.length - 1].usage_gender == 'f'){
    //         $(".origin_gender").append('Female');
    //     }
        
    //     setTimeout(function(){
            
    //     $("#load_screen").hide();
            
    //     //cleartimeout, settimeout = 30, start timer function   
    //     var timeoutNow = 30000;
    //     clearTimeout(timeoutTimer);
    //     timeoutTimer = setTimeout("IdleTimeout()", timeoutNow);
    //     },3000);
    //     }
    // });
}

        // Start timer
        function StartTimer() {
        timeoutTimer = setTimeout("IdleTimeout()", timeoutNow);
        }

         //Reset timer
        
        function ResetTimer() {
        // alert("hit");
        clearTimeout(timeoutTimer);
        vid.pause();
        vid.currentTime = 0;
        StartTimer();
        $(".video-container").hide();
        }

        // play video
     
        function IdleTimeout() {
        $(".video-container").show();
        vid.play();
        }

$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      $(".main-container").hide();
      userName = $('#name').val();
      show_load_screen();
      callback();
      //return false;
    }
  });
});

$("body").bind("click touchstart", function(){

  ResetTimer();

});

$('.submit-button ').on('click touch', function (e) {
    e.preventDefault();
    checkForm();
});

$('.ticks').on('click touch', function (e) {
    $(".ticks").prop("checked", false);
    var newString = this.className.substr(6);
    $("."+newString).prop("checked", true);
    whichAnswer = this.className.substr(11);
});

function checkForm (){
    
    if($('.checkbox4 input').is(":checked") == true){
        console.log('termcheck ---> true');
        $('.checkbox4').css({
            color:"#212529"
        });
        a = true;
    }
    else{
        console.log('termcheck ---> false');
        $('.checkbox4').css({
            color:"red"
        });
    }
    if( $('#email').val().length > 0 ) {
        console.log('email ---> true');
        $('.emailText').css({
            color:"#212529"
        });
        b = true;
    }
    else{
        $('.emailText').css({
            color:"red"
        });
        console.log('email ---> false');
    }
    if( $('#tel-number').val().length > 0 ) {
        console.log('email ---> true');
        $('.telText').css({
            color:"#212529"
        });
        c = true;
    }
    else{
        $('.telText').css({
            color:"red"
        });
        console.log('email ---> false');
    }
    if( $('#fname').val().length > 0 ) {
        console.log('email ---> true');
        $('.fText').css({
            color:"#212529"
        });
        d = true;
    }
    else{
        $('.fText').css({
            color:"red"
        });
        console.log('email ---> false');
    }
    if($('#digit-0').val().length > 0 && $('#digit-1').val().length > 0 && $('#digit-2').val().length > 0 && $('#digit-3').val().length > 0 && $('#digit-4').val().length > 0 && $('#digit-5').val().length > 0) {
        $('.recieptText').css({
            color:"#212529"
        });
        e = true;
    }
    else{
        $('.recieptText').css({
            color:"red"
        });
        console.log('email ---> false');
    }
    if($('.ticks').is(":checked")) {
        $('h4').css({
            color:"#212529"
        });
        f = true;
    }
    else{
        $('h4').css({
            color:"red"
        });
        console.log('email ---> false');
    }
   

    if(a == true && b == true && c == true && d == true && f == true){
        //$('#error').hide();

        recieptValue = $('#digit-0').val() + $('#digit-1').val() + $('#digit-2').val() + $('#digit-3').val() + $('#digit-4').val() + $('#digit-5').val()

        myData = [['name',$('#fname').val()],['recieptNo',recieptValue],['whichAnswer',whichAnswer],['tel-number',$('#tel-number').val()],['email',$('#email').val()]]

        console.log(myData);

        console.log($.param({myData}));

        var newData = JSON.stringify(myData);

         $.ajax({
            url: 'saveJson.php',
            method: 'POST',
            data: $.param({myData}),
            success: function(result) {

                $('.main-container3').hide()
                $('.main-container-thanks').show()

             },
            error: function(result) {alert("Error!");}
        });

         // $.post('saveJson.php', {
         //        newData: newData
         //    }, function(response) {
         //        console.log(response);
         //    })
    }
    else{
        //$('#error').show();
    }


}