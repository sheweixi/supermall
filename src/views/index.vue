<template>
	<div>
	 <h2>{{title}}</h2>
	 <p>{{obj.profile}}</p>
	 <button @click="toggle">toggle</button>
	</div>
</template>
<script type="text/javascript">
	export default {
        name:'Instance',
        data(){
            return {
                title:"A vue App",
                obj: {}
            }
        },
        created(){
            this.$set(this.obj,'profile','This is a Vue App')
            console.log('created',this.obj)
        },
        mounted(){
         Object.assign(this.obj,{
                profile:'This is a Vue Test App '
            })
            console.log('mounted',this.obj)
        },
        methods:{
        	toggle(){
        	Object.assign(this.obj,{
        		profile:'This is a Vue App for test'
        	})
        	console.log('toggle',this.obj)
        }
    }
    }

</script>