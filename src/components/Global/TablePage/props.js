const props = {
    // Table Attributes
    data: Array,
    border: Boolean,
    size: String,
    stripe: Boolean,
    showHeader: {
        type: Boolean,
        default: true
    },
    currentRowKey: [String, Number],
    rowClassName: [String, Function],
    emptyText: String,
    tooltipEffect: String,
    tableStyle: {
        type: String,
        default: 'width:100%;margin-top:20px;'
    },
    // Table-column Attributes
    columns: {
        type: Array,
        required: true
    },
    // Pagination  Attributes
    total: {
        required: true,
        type: Number
    },
    page: {
        type: Number,
        default: 1
    },
    offset: {
        type: Number,
        default: 20
    },
    layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
        type: Boolean,
        default: true
    },
    autoScroll: {
        type: Boolean,
        default: true
    },
    hidden: {
        type: Boolean,
        default: false
    }
}
export default props
