<template>
  <li>
    时间筛选:
    <span
      v-for="(item, index) in dateList"
      :key="`a-${index}`"
      :class="{'active-class': item.value === type }"
      @click="dateChange(item)"
    >{{ item.label }}</span>
    <el-date-picker
      v-if="type === ''"
      v-model="dateValue"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy-MM-dd HH:mm:ss"
      clearable
      style="margin-left: 20px;"
      @change="$emit('DateQuery')"
    />
  </li>
</template>

<script>
export default {
    name: 'DateQuery',
    props: {
        dateType: {
            type: [Number, String],
            default: 2
        },
        startTime: {
            type: String,
            default: ''
        },
        endTime: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            dateList: [{
                label: '今天',
                value: 0
            }, {
                label: '本周',
                value: 1
            }, {
                label: '本月',
                value: 2
            }, {
                label: '自定义',
                value: ''
            }]
        }
    },
    computed: {
        type: {
            get () {
                return this.dateType
            },
            set (val) {
                this.$emit('update:dateType', val)
            }
        },
        dateValue: {
            get () {
                return [this.startTime, this.endTime]
            },
            set (val) {
                this.$emit('update:startTime', val ? val[0] : '')
                this.$emit('update:endTime', val ? val[1] : '')
            }
        }
    },
    methods: {
        // 时间筛选
        dateChange ({
            value
        }) {
            this.type = value
            if (value !== '') {
                this.$emit('update:startTime', '')
                this.$emit('update:endTime', '')
                this.$emit('DateQuery')
            }
        }
    }
}
</script>
