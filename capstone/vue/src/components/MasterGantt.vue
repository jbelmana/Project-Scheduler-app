<template>
  <v-container>
    <!-- <h2>{{tasks}}</h2> -->
    <gantt-elastic :options="options" :tasks="tasks">
      <gantt-header slot="header" :options="options"></gantt-header>
    </gantt-elastic>
  </v-container>
</template>

<script>
  import GanttElastic from "gantt-elastic";
  import GanttHeader from "gantt-elastic-header";
  
  export default {
    name: "master-gantt",
    components: {
      GanttElastic,
      GanttHeader,
    },
    data() {
      return {
        options: {
          times: {
            timeZoom: 16,
            timeScale: 60 * 25000,
          },
          title: {
            label: "Master Schedule",
            html: false,
          },
          maxRows: 100,
          maxHeight: 500,
          row: {
            height: 16,
          },
          calendar: {
            hour: {
              display: false,
            },
          },
          chart: {
            progress: {
              bar: true,
            },
            expander: {
              display: true,
            },
          },
          taskList: {
            expander: {
              straight: false,
            },
            columns: [
              {
                id: 1,
                label: "ID",
                value: "id",
                width: 40,
              },
              {
                id: 2,
                label: "Project",
                value: "label",
                width: 200,
                expander: true,
                html: true,
              },
              {
                id: 3,
                label: "Type",
                value: "type",
                width: 68,
              },{
                id: 4,
                label: "Start",
                value: task=>new Date(task.start).toLocaleDateString({dateStyle:"short"}),
                width: 68,
              },{
                id: 5,
                label: "End",
                value: task=>new Date(task.endTime).toLocaleDateString({dateStyle:"short"}),
                width: 68,
              },
            ],
          },
          locale: {
            name: "en",
            Now: "Now",
            "X-Scale": "Zoom-X",
            "Y-Scale": "Zoom-Y",
            "Task list width": "Task list",
            "Before/After": "Expand",
            "Display task list": "Task list",
          },
        },
        taskList: [],
      };
    },
    computed: {
      tasks() {
        return this.$store.state.masterSchedule;
      },
      scheduleLoaded() {
        return this.$store.state.scheduleLoaded;
      },
    },
    mounted() {},
  };
</script>

<style></style>
