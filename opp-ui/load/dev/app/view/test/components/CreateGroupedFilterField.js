Ext.define('CCPerf.view.test.components.CreateGroupedFilterField', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.create-grouped-filter-field',
    layout: {
        type: 'hbox',
        align: 'top'  // Child items are stretched to full width
    },
    fieldDefaults: {
        padding:5
    },
    items: [{
        xtype: 'combobox',
        store: {
            type: 'array',
            fields: [ 'column_name' ],
            data: [
                ['app_under_test'],
                ['app_under_test_version'],
                ['comments'],
                ['description'],
                ['environment'],
                ['start_time'],
                ['test_name'],
                ['test_sub_name'],
                ['test_tool'],
                ['test_tool_version'],
                ['vuser_count'],
                ['sla_group_id']
            ]
        },
        displayField: 'column_name',
        fieldLabel: 'Filter',
        labelWidth:35,
        anchor: '0',
        queryMode: 'local',
        selectOnTab: false,
        name: 'columnName'
    }, {
        xtype: 'textfield',
        name: 'criteria',
        width: 200
    }, {
        xtype:'button',
        text: 'Add more',
        itemId: 'btnGroupedFilterFieldAdd',
        padding:5
    },  {
            xtype:'button',
            itemId:'deleteFieldContainerBtn',
            text: 'X',
            padding:5,
            hidden:true,
            handler: function() {
                this.up('panel').remove(this.up('fieldcontainer'), true);
            }
        }]
});
