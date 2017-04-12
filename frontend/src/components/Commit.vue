
<template lang="pug">
.commit-component
  template
    el-form-item(label='提交状态')
      el-select(v-model='_form.status', placeholder='请选择')
        el-option(label='草稿', value='draft')
        el-option(label='定时', value='schedule')
        el-option(label='发送', value='send')
    el-form-item(label='时间', v-if='_form.status === "schedule"')
      el-date-picker( v-model='_form.sendAt', type='datetime', placeholder='选择日期时间')
    el-button(type='primary', size="large", @click='onSubmit') 提交
    el-dialog(title='去查看', v-model='dialogVisible')
      .dialog-footer(slot='footer')
        el-button(@click='') 取 消
        el-button(type='primary', @click='dialogConfim') 确 定
</template>

<script>

export default {
  name: 'commit-component',
  computed: {
  },
  props: {
    _form: Object,
    dialogVisible: Boolean,
    dialogConfim: Function,
    onSubmit: Function,
  },
  data () {
    return {
    }
  },
  methods: {
  },
  beforeMount () {
  }
}
</script>

