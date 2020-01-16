<template>
  <div>
    <el-table
      ref="table"
      :data="data"
      :border="border"
      :size="size"
      :stripe="stripe"
      :show-header="showHeader"
      :current-row-key="currentRowKey"
      :row-class-name="rowClassName"
      :empty-text="emptyText"
      :tooltip-effect="tooltipEffect"
      :style="tableStyle"
      @header-click="(column, event) => emitEventHandler('header-click', column, event)"
      @selection-change="(selection) => emitEventHandler('selection-change', selection)"
    >
      <slot name="prepend" />
      <template v-for="(column, columnIndex) in columns">
        <el-table-column
          v-if="column.type === undefined"
          :key="columnIndex"
          :prop="column.prop"
          :label="column.label"
          :width="column.minWidth ? '-' : (column.width || 140)"
          :min-width="column.minWidth || column.width || 140"
          :render-header="column.renderHeader"
          :show-overflow-tooltip="column.showOverflowTooltip"
          :align="column.align"
          :header-align="column.headerAlign || column.align"
        >
          <template
            slot-scope="scope"
          >
            <span v-if="column.filter">
              {{ Vue.filter(column.filter)(scope.row[column.prop]) }}
            </span>
            <span v-else-if="column.slotName">
              <slot
                :name="column.slotName"
                :row="scope.row"
                :$index="scope.$index"
              />
            </span>
            <span v-else-if="column.render">
              {{ column.render(scope.row) }}
            </span>
            <span v-else>
              {{ scope.row[column.prop] }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="columnIndex"
          v-bind="column"
        />
      </template>

      <slot name="append" />
    </el-table>

    <div
      :class="{'hidden':hidden}"
      class="module-pagination"
    >
      <el-pagination
        :background="background"
        :current-page.sync="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size.sync="limit"
        :layout="layout"
        :total="total"
        v-bind="$attrs"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { scrollTo } from '@/utils/scroll-to'
import props from './props'

export default {
    name: 'TablePage',
    props,
    data () {
        return {
            Vue
        }
    },
    computed: {
        currentPage: {
            get () {
                return this.page
            },
            set (val) {
                this.$emit('update:page', val)
            }
        },
        limit: {
            get () {
                return this.offset
            },
            set (val) {
                this.$emit('update:offset', val)
            }
        }
    },
    methods: {
        // 分页
        handleCurrentChange (val) {
            this.$emit('pagination', { page: val })
            if (this.autoScroll) {
                scrollTo(0, 800)
            }
        },
        // 每页条数
        handleSizeChange (val) {
            this.$emit('pagination', { offset: val })
            if (this.autoScroll) {
                scrollTo(0, 800)
            }
        },
        // 全选
        toggleSelection (checkedAll) {
            if (checkedAll) {
                this.$refs.table.toggleAllSelection()
            } else {
                this.$refs.table.clearSelection()
            }
        },
        // 表格事件
        emitEventHandler (event) {
            this.$emit(event, ...Array.from(arguments).slice(1))
        }
    }
}
</script>
