<template>
  <table class="table">
    <tbody>
      <tr>
        <th>Tarih</th>
        <td>{{ data.Date }}</td>
      </tr>
      <tr>
        <th>Konum</th>
        <td>{{ data.Region.District + " - " + data.Region.City }}</td>
      </tr>
      <tr>
        <th>Enlem</th>
        <td>{{ data.Latitude }}</td>
      </tr>
      <tr>
        <th>Boylam</th>
        <td>{{ data.Longitude }}</td>
      </tr>
      <tr>
        <th>Derinlik</th>
        <td>{{ data.Depth }}</td>
      </tr>
      <tr>
        <th>Büyüklük</th>
        <td>{{ data.Magnitude }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts" setup>
import EarthquakeInterface from "~~/interfaces/earthquake.interface";

type Props = {
  data: EarthquakeInterface;
};
const { data } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  font-size: 13px;
  margin-bottom: 25px;
  tr {
    td,
    th {
      width: 100%;
      padding: 10px;
    }
    td {
      border: 1px solid $dark;
      font-weight: bold;
    }
    th {
      background-color: $dark;
      color: $white;
      width: 30%;
    }
  }
}
</style>
