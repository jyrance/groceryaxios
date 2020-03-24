<template>
    <div id="main">
        <div id="chart">
            <axiosExample></axiosExample>
        
        </div>
         <div id="chart">
            <PSIIndex></PSIIndex>
        
        </div>
        <div>
            <Covid/>
        </div>

        <div class = 'chart'>
            <Transport/>
        </div>
        
    </div>
</template>

<script>
import axiosExample from '../axiosExample.js'
import PSIIndex from '../PSIIndex.js'
import Covid from '../Covid'
import Transport from '../Transport'

export default {
    components:{
        axiosExample,PSIIndex, Covid, Transport
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:600;
  width:600;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
</style>