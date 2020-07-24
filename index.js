
const calculatorHTML = `
<style>
.ERVcalculator {
    background-color: #F6F6F6;
    padding: 1em 2em 2em;
    border-radius: .5em;
    display: block;
    opacity: .9;
    max-width: 500px;
  }
  .ERVcalculator input {
    max-width: 100px;
    line-height: 2em;
  }
  .ERVcalculator input[disabled] {
    background-color: transparent;
    border: none;
    font-size: 1.5em;
    font-weight: 700;
    display: inline-block;
  }
  .ERVcalculator label {
    margin-bottom: .5em;
    display: block;
  }
  .ERVcalculator label[for=output] {
    margin-bottom: 0;
  }
  .ERVcalculator .inline-block {
    max-width: 125px;
    display: inline-block;
  }
  .ERVcalculator table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em auto 3em;
  }
  .ERVcalculator table tr td {
    border-bottom: solid thin #333333;
    height: 3em;
  }
  </style>
<h2>Epoxy Resin Volume Calculator</h2>
<h4>What are the dimensions of your project?</h4>
<div class="inline-block">
    <label for="length">Length (in)</label>
    <input id="length" type="number" value="0">
</div>
<div class="inline-block">
    <label for="width">Width (in)</label>
    <input id="width" type="number" value="0">
</div>
<div class="inline-block">
    <label for="thickness">Thickness (in)</label>
    <input id="thickness" type="number" value="0">
</div>

<table>
    <tbody>
        <tr>
            <td style="width: 100px;">1/8'' = 0.125</td>
            <td style="width: 101px;">1/4'' = 0.25</td>
            <td style="width: 103px;">3/8'' = 0.375</td>
            <td style="width: 99px;">1/2'' = 0.50</td>
        </tr>
        <tr>
            <td style="width: 100px;">5/8'' = 0.625</td>
            <td style="width: 101px;">3/4'' = 0.75</td>
            <td style="width: 103px;">7/8'' = 0.875</td>
            <td style="width: 99px;">1'' = 1.00</td>
        </tr>
        <tr>
            <td style="width: 100px;" colspan="4"><em>1/16'' or 0.0625 can be used for seal coats</em></td>
        </tr>
    </tbody>
</table>

<h4>Here is the volume of your project</h4>
<div class="inline-block">
    <label for="output">Cubic Inches</label>
    <input id="cubicInches" type="number" disabled value="0">
</div>
<div class="inline-block">
    <label for="output">Cubic Feet</label>
    <input id="cubicFeet" type="number" disabled value="0">
</div>

<h4>Here is the amount of epoxy resin you will need</h4>
<div class="inline-block">
    <label for="output">Ounces</label>
    <input id="ounces" type="number" disabled value="0">
</div>
<div class="inline-block">
    <label for="output">Liters</label>
    <input id="liters" type="number" disabled value="0">
</div>
<div class="inline-block">
    <label for="output">Gallons</label>
    <input id="gallons" type="number" disabled value="0">
</div>`;
document.getElementById('epoxyResinVolumeCalculator').innerHTML = calculatorHTML;
var cssId = 'ERVCalculator';
const   vLength         = document.getElementById('length'), 
        vWidth          = document.getElementById('width'), 
        vThickness      = document.getElementById('thickness'),
        cubicInches     = document.getElementById('cubicInches'),
        cubicFeet       = document.getElementById('cubicFeet'),
        ounces          = document.getElementById('ounces'),
        liters          = document.getElementById('liters'),
        gallons         = document.getElementById('gallons'),
        volume_array    = [vLength, vWidth, vThickness];
for (let i = 0; i <= volume_array.length - 1; i++)
volume_array[i].addEventListener('keyup', event => {
    cubicInches.value   = (Number.isInteger(vLength.value * vWidth.value * vThickness.value) === true) ? (vLength.value * vWidth.value * vThickness.value) : (vLength.value * vWidth.value * vThickness.value).toFixed(2);
    cubicFeet.value     = (Number.isInteger(cubicInches.value / 1728) === true) ? (cubicInches.value / 1728) : (cubicInches.value / 1728).toFixed(2);
    ounces.value        = (Number.isInteger(cubicInches.value / 1.805) === true) ? (cubicInches.value / 1.805) : (cubicInches.value / 1.805).toFixed(2);
    liters.value        = (Number.isInteger(cubicInches.value / 61.024) === true) ? (cubicInches.value / 61.024) : (cubicInches.value / 61.024).toFixed(2);
    gallons.value       = (Number.isInteger(cubicInches.value / 231) === true) ? (cubicInches.value / 231) : (cubicInches.value / 231).toFixed(2);
})