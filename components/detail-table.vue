<template>
  <table class="table">
    <tbody>
      <tr>
        <th>Tarih</th>
        <td>{{ $dayjs(data.Date).format("DD/MM/YYYY HH:MM:ss") }}</td>
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
        <td>{{ data.Depth }} Km</td>
      </tr>
      <tr>
        <th>Büyüklük</th>
        <td>{{ data.Magnitude }} MW</td>
      </tr>
      <tr>
        <th>Konum</th>
        <td>{{ data.Region.District + " - " + data.Region.City }}</td>
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
const { $dayjs } = useNuxtApp();
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
    }
    td {
      border: 1px solid $dark;
      font-weight: bold;
      padding: 10px;
    }
    th {
      text-align: left;
      background-color: $dark;
      color: $white;
      width: 30%;
      padding-left: 15px;
    }
  }
}
</style>
