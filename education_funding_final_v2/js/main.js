
// Add the map, basemap, and attirbution
var dataLayer;
var value;
var layer;
var url = 'https://newsworks.carto.com/api/v2/viz/44a93c8a-7c3c-11e6-b578-0e05a8b3e3d7/viz.json';


//QUANTILE INTERVALS from 5.98, same for all percentages (version 2)
var css598 = "#pa_school_districts_2015_fair_funding_formula{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_fair_funding_formula[ pup_5_98 <= 14576.073520] {polygon-fill: #006d2c;}#pa_school_districts_2015_fair_funding_formula [ pup_5_98 <= 5995.790102] {polygon-fill: #31a354;}#pa_school_districts_2015_fair_funding_formula [ pup_5_98 <= 4491.090421] {polygon-fill:#74c476;}#pa_school_districts_2015_fair_funding_formula [ pup_5_98 <= 3055.448955] {polygon-fill: #bae4b3;}#pa_school_districts_2015_fair_funding_formula [ pup_5_98 <= 1961.998050]{polygon-fill: #E1F6D9;line-color: #D1D2D1;}";
var css10 = "#pa_school_districts_2015_fair_funding_formula{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_fair_funding_formula[ pup_10 <= 14576.073520] {polygon-fill: #006d2c;}#pa_school_districts_2015_fair_funding_formula [ pup_10 <= 5995.790102] {polygon-fill: #31a354;}#pa_school_districts_2015_fair_funding_formula [ pup_10 <= 4491.090421] {polygon-fill:#74c476;}#pa_school_districts_2015_fair_funding_formula [ pup_10 <= 3055.448955] {polygon-fill: #bae4b3;}#pa_school_districts_2015_fair_funding_formula [ pup_10 <= 1961.998050]{polygon-fill: #edf8e9;line-color: #D1D2D1;}";
var css20 = "#pa_school_districts_2015_fair_funding_formula{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_fair_funding_formula[ pup_20 <= 14576.073520] {polygon-fill: #006d2c;}#pa_school_districts_2015_fair_funding_formula [ pup_20 <= 5995.790102] {polygon-fill: #31a354;}#pa_school_districts_2015_fair_funding_formula [ pup_20 <= 4491.090421] {polygon-fill:#74c476;}#pa_school_districts_2015_fair_funding_formula [ pup_20 <= 3055.448955] {polygon-fill: #bae4b3;}#pa_school_districts_2015_fair_funding_formula [ pup_20 <= 1961.998050]{polygon-fill: #edf8e9;line-color: #D1D2D1;}";
var css30 = "#pa_school_districts_2015_fair_funding_formula{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_fair_funding_formula[ pup_30 <= 14576.073520] {polygon-fill: #006d2c;}#pa_school_districts_2015_fair_funding_formula [ pup_30 <= 5995.790102] {polygon-fill: #31a354;}#pa_school_districts_2015_fair_funding_formula [ pup_30 <= 4491.090421] {polygon-fill:#74c476;}#pa_school_districts_2015_fair_funding_formula [ pup_30 <= 3055.448955] {polygon-fill: #bae4b3;}#pa_school_districts_2015_fair_funding_formula [ pup_30 <= 1961.998050]{polygon-fill: #edf8e9;line-color: #D1D2D1;}";
var css40 = "#pa_school_districts_2015_fair_funding_formula{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_fair_funding_formula[ pup_40 <= 14576.073520] {polygon-fill: #006d2c;}#pa_school_districts_2015_fair_funding_formula [ pup_40 <= 5995.790102] {polygon-fill: #31a354;}#pa_school_districts_2015_fair_funding_formula [ pup_40 <= 4491.090421] {polygon-fill:#74c476;}#pa_school_districts_2015_fair_funding_formula [ pup_40 <= 3055.448955] {polygon-fill: #bae4b3;}#pa_school_districts_2015_fair_funding_formula [ pup_40 <= 1961.998050]{polygon-fill: #edf8e9;line-color: #D1D2D1;}";
var css50 = "#pa_school_districts_2015_fair_funding_formula{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_fair_funding_formula[ pup_50 <= 14576.073520] {polygon-fill: #006d2c;}#pa_school_districts_2015_fair_funding_formula [ pup_50 <= 5995.790102] {polygon-fill: #31a354;}#pa_school_districts_2015_fair_funding_formula [ pup_50 <= 4491.090421] {polygon-fill:#74c476;}#pa_school_districts_2015_fair_funding_formula [ pup_50 <= 3055.448955] {polygon-fill: #bae4b3;}#pa_school_districts_2015_fair_funding_formula [ pup_50 <= 1961.998050]{polygon-fill: #edf8e9;line-color: #D1D2D1;}";
var css60 = "#pa_school_districts_2015_fair_funding_formula{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_fair_funding_formula[ pup_60 <= 14576.073520] {polygon-fill: #006d2c;}#pa_school_districts_2015_fair_funding_formula [ pup_60 <= 5995.790102] {polygon-fill: #31a354;}#pa_school_districts_2015_fair_funding_formula [ pup_60 <= 4491.090421] {polygon-fill:#74c476;}#pa_school_districts_2015_fair_funding_formula [ pup_60 <= 3055.448955] {polygon-fill: #bae4b3;}#pa_school_districts_2015_fair_funding_formula [ pup_60 <= 1961.998050]{polygon-fill: #edf8e9;line-color: #D1D2D1;}";
var css70 = "#pa_school_districts_2015_fair_funding_formula{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_fair_funding_formula[ pup_70 <= 14576.073520] {polygon-fill: #006d2c;}#pa_school_districts_2015_fair_funding_formula [ pup_70 <= 5995.790102] {polygon-fill: #31a354;}#pa_school_districts_2015_fair_funding_formula [ pup_70 <= 4491.090421] {polygon-fill:#74c476;}#pa_school_districts_2015_fair_funding_formula [ pup_70 <= 3055.448955] {polygon-fill: #bae4b3;}#pa_school_districts_2015_fair_funding_formula [ pup_70 <= 1961.998050]{polygon-fill: #edf8e9;line-color: #D1D2D1;}";
var css80 = "#pa_school_districts_2015_fair_funding_formula{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_fair_funding_formula[ pup_80 <= 14576.073520] {polygon-fill: #006d2c;}#pa_school_districts_2015_fair_funding_formula [ pup_80 <= 5995.790102] {polygon-fill: #31a354;}#pa_school_districts_2015_fair_funding_formula [ pup_80 <= 4491.090421] {polygon-fill:#74c476;}#pa_school_districts_2015_fair_funding_formula [ pup_80 <= 3055.448955] {polygon-fill: #bae4b3;}#pa_school_districts_2015_fair_funding_formula [ pup_80 <= 1961.998050]{polygon-fill: #edf8e9;line-color: #D1D2D1;}";
var css90 = "#pa_school_districts_2015_fair_funding_formula{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_fair_funding_formula[ pup_90 <= 14576.073520] {polygon-fill: #006d2c;}#pa_school_districts_2015_fair_funding_formula [ pup_90 <= 5995.790102] {polygon-fill: #31a354;}#pa_school_districts_2015_fair_funding_formula [ pup_90 <= 4491.090421] {polygon-fill:#74c476;}#pa_school_districts_2015_fair_funding_formula [ pup_90 <= 3055.448955] {polygon-fill: #bae4b3;}#pa_school_districts_2015_fair_funding_formula [ pup_90 <= 1961.998050]{polygon-fill: #edf8e9;line-color: #D1D2D1;}";
var css100 = "#pa_school_districts_2015_fair_funding_formula{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_fair_funding_formula[ pup_100 <= 14576.073520] {polygon-fill: #006d2c;}#pa_school_districts_2015_fair_funding_formula [ pup_100 <= 5995.790102] {polygon-fill: #31a354;}#pa_school_districts_2015_fair_funding_formula [ pup_100 <= 4491.090421] {polygon-fill:#74c476;}#pa_school_districts_2015_fair_funding_formula [ pup_100 <= 3055.448955] {polygon-fill: #bae4b3;}#pa_school_districts_2015_fair_funding_formulas_rank_medhh_1 [ pup_100 <= 1961.998050]{polygon-fill: #edf8e9;line-color: #D1D2D1;}";




function removeTip (x, y, val1, val2, val3, val4, val5){
  $('.cartodb-tooltip').remove();
  $('#infowindow_template').hide();
  $('#infowindow_template').empty();
  $('#infowindow_template').append('<div class="hello"><div class="tip_container"><h4>{{name}}</h4><h4>Total State Basic Ed Funding</h4><p>${{'+ val1 +'}}<p><h4>Per Pupil Allocation</h4><p>${{'+ val2 +'}}<p><h4>Per Pupil Funding Rank</h4><p>{{'+ val3 +'}} out of 500<p><div class="tipCircle"></div><h4>Median Household Income</h4><p><font color={{color}}>{{hh_order}}</font> ${{smed_hh}}</p></div></div>');
  $('.legend_val').empty();
  $('.legend_val').append('<p style="margin-top: 3px; margin-bottom: 0px; font-family: Lato; font-size: small">'+ val4 + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ val5 + '</p>');
  x.setCartoCSS(y);
}

function slideCSS(d, x){
return d == 5.98   ? removeTip(x, css598, 'stot_5_98', 'spup_5_98', 'rank_5_98', '$483', '$14,576') :
  d == 10   ?   removeTip(x, css10, 'stot_10', 'spup_10', 'rank_10', '$491', '$14,566'):
  d == 20   ?   removeTip(x, css20, 'stot_20', 'spup_20', 'rank_20', '$510', '$14,544') :
  d == 30   ?   removeTip(x, css30, 'stot_30', 'spup_30', 'rank_30', '$529', '$14,521') :
  d == 40   ?   removeTip(x, css40, 'stot_40', 'spup_40', 'rank_40', '$548', '$14,499') :
  d == 50   ?   removeTip(x, css50, 'stot_50', 'spup_50', 'rank_50', '$567', '$14,476') :
  d == 60   ?   removeTip(x, css60, 'stot_60', 'spup_60', 'rank_60', '$586', '$14,454') :
  d == 70   ?   removeTip(x, css70, 'stot_70', 'spup_70', 'rank_70', '$605', '$14,431') :
  d == 80   ?   removeTip(x, css80, 'stot_80', 'spup_80', 'rank_80', '$624', '$14,408') :
  d == 90   ?   removeTip(x, css90, 'stot_90', 'spup_90', 'rank_90', '$585', '$14,386') :
  d == 100  ?   removeTip(x, css100, 'stot_100', 'spup_100', 'rank_100', '$232', '$14,363'):
               removeTip(x, css598, 'stot_5_98', 'spup_5_98', 'rank_5_98');
}



var map = new L.Map('map', {
  zoomControl: false,
  center: [40.972845, -77.749573],
  zoom: 8
});


function main() {

function slideFunc(theLayer, thefunc, theID){
  $('.nstSlider').nstSlider({
      "left_grip_selector": ".leftGrip",
      "rounding": {
      "5.98": "10",
       "10": "20",
       "20": "30",
       "30": "40",
       "40": "50",
       "50": "60",
       "60": "70",
       "70": "80",
       "80": "90",
       "90": "100",
       "100": "110"
   },
      "value_changed_callback": function(cause, leftValue, rightValue) {
          $(this).parent().find('.percLabel').text(leftValue+"%");
          value = leftValue;
          slideCSS(value, theLayer);
          thefunc();
          // hov(theLayer);
      }
  });
}



  //Change your viz.json below
          cartodb.createVis('map', url, {
            search: false,
            tiles_loader: true,
            layer_selector: false,
            https: true,
            scrollwheel: true,

          })
          .done(function(vis, layers) {

            //getting the data layer
            layer = layers[1];
            dataLayer = layers[1].getSubLayer(0);

            dataLayer.set({ 'interactivity': ['cartodb_id', 'name', 'stot_5_98', 'stot_10', 'stot_20', 'stot_30', 'stot_40', 'stot_50', 'stot_60', 'stot_70', 'stot_80', 'stot_90', 'stot_100', 'spup_5_98', 'spup_10', 'spup_20', 'spup_30', 'spup_40', 'spup_50', 'spup_60', 'spup_70', 'spup_80', 'spup_90', 'spup_100', 'rank_5_98', 'rank_10', 'rank_20', 'rank_30', 'rank_40', 'rank_50', 'rank_60', 'rank_70', 'rank_80', 'rank_90', 'rank_100', 'smed_hh', 'med_hh_ran', 'color', 'hh_order']});

          function tip(){
            tooltip = vis.addOverlay({
              type: 'tooltip',
              template: $('#infowindow_template').html(),
             fields: [{ name: 'name', totch_90: 'totch_90'}],
            });

          }
           //Apply a CartoCSS for that layer
           tip();
           slideFunc(dataLayer, tip);

          })
          .error(function(err) {
            console.log(err);
          });

}

// you could use $(window).load(main);
window.onload = main;
