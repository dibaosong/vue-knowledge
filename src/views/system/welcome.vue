<template>
  <div>
    

  <el-tree
  ref="tree"
  :data="data"
  @check-change="change"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[1, 2, 3, 4]"
  :props="defaultProps">
</el-tree>

<el-button @click="get">获取</el-button>
    
    
    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      get(){
        console.log(this.$refs.tree.getCheckedNodes(false, true));
      },
      change(data, a, b){
        console.log(data, a, b)
      }
    }
  };
</script>