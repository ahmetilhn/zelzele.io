<template>
  <div class="info" vertical-center>
    <div class="info__title" horizontal-center>
      <h2>Zelzele.io</h2>
      <span>v{{ config.public.appVersion }}</span>
    </div>
    <br />
    <div class="info__questions" vertical-center>
      <div class="item">
        <h4>Deprem Verileri Nereden Çekiliyor?</h4>
        <p>
          Veriler Afad'dan anlık olarak çekilmekte olup hiçbir manipulasyona
          uğratılmamaktadır. Kaynak:
          <a href="https://deprem.afad.gov.tr/last-earthquakes.html">Afad</a>
          <br />
        </p>
      </div>
      <div class="item">
        <h4>Tarihsel Deprem Grafiği Nasıl Oluşturuluyor?</h4>
        <p>
          Afad'dan gelen X şehrine ait tüm veriler belirli hesaplamalardan
          geçirilerek grafiğe dönüştürülür. Bu işlemde maksimum deprem şiddeti:
          <strong>9.5</strong> referans alınıp bu uç noktasına göre
          hesaplanmaktadır.
        </p>
        <img
          src="~~/assets/img/promotion/earthquake-item.png"
          alt="Zelzele.io deprem grafiği"
        />
      </div>
      <div class="item">
        <h4>Gri, Sarı ve Kırmızı renkler ne anlama geliyor?</h4>
        <p>
          Listelemede herhangi bir depremin tasarım rengi o depremin şiddeti ile
          yapılan bir hesaplama sonucu belirlenmektedir.
          <br />
          <br />
          <strong>Gri:</strong> 3'ten büyük <strong>Sarı:</strong> 5'ten büyük
          <strong>Kırmızı:</strong>7'den büyük
        </p>
      </div>
      <div class="item">
        <h4>
          Deprem grafiği aynı olan iki şehir aynı depremlerden mi etkileniyor?
        </h4>
        <p>
          Böyle bir çıkarımda bulunmak yanlıştır denemez ama doğru da değildir.
          Bu noktada deprem uzmanları tarafından teknik yorumları dikkate
          alınması gerek.
        </p>
        <img
          src="~~/assets/img/promotion/earthquake-item-2.png"
          alt="Zelzele.io benzer deprem grafiği"
        />
      </div>
    </div>
    <div class="info__kvkk">
      <p>
        <strong
          >Bu sitedeki veriler
          <a href="https://deprem.afad.gov.tr/last-earthquakes.html"
            >Afad'dan</a
          >
          çekilmekte olup herhangi bir manipulasyona uğratılmamaktadır.
          <a href="https://zelzele.io/">zelzele.io</a> bu verileri sadece aynen
          iletmekte olup, bu verilerin yanlışlığından doğacak hiçbir sorumluluğu
          kabul etmemektedir.</strong
        >
      </p>
    </div>
    <div class="info__contact">
      <h4>Proje Hakkında</h4>
      <p>
        <strong
          >Bu proje sadece www.zelzele.io adresinden yayınlanmıştır. Projenin
          kopyalandığı diğer sitelerin www.zelzele.io ile hiç bir alakası
          yoktur.</strong
        >
      </p>
      <p>
        Herhangi bir kar amacı gütmeden oluşturulan bu proje Türkiye'de sürekli
        gerçekleşen depremlerin analiz, inceleme ve karşılaştırma amaçlarına
        hizmet etmektedir. Proje yayında olduğu sürece amacından kopmayacaktır.
      </p>
      <p>
        Bu proje açık kaynak (<img
          src="~~/assets/svg/opensource.svg"
          alt="Opensource"
          title="Bu proje açık kaynaktır"
          width="20px"
          height="20px"
        />) olup
        <a href="https://github.com/ahmetilhan24/zelzele.io" target="_blank"
          >Github
        </a>
        üzerinden desteklerinizi beklemektedir.
      </p>
      <p>
        Bir hata bildirmek ya da yeni bir özelik eklenmesini istiyorsanız şu
        linkten bir issue(Talep) açın.
        <a
          href="https://github.com/ahmetilhan24/zelzele.io/issues"
          target="_blank"
          >Github Issues</a
        >
      </p>
    </div>
    <div class="info__note" vertical-center>
      <p>
        Unutmak yarınlarımıza ve kaybettiğimiz insanlarımıza saygısızlıktır. 6
        Şubat 2023 Kahramanmaraş ve çevre illerinde gerçekleşen Depremlerde
        hayatını kaybedenleri saygıyla anıyor, yakınlarına sabırlar diliyoruz.
      </p>
      <img src="~~/assets/img/promotion/mourn.png" alt="" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig();
useHead({
  title: "Zelzele.io tanıtım ve bilgi sayfası",
  meta: [
    {
      name: "description",
      content:
        "Zelzele.io Nedir? Zelzele.io kullanım koşuları nelerdir? Tüm depremler grafiği nasıl oluşturulur?",
    },
  ],
});
</script>
<style lang="scss" scoped>
.info {
  padding: 0 $padding-one;
  width: 100%;
  margin-top: 40px;
  max-width: $max-width-one;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline:auto;
  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 24px;
    a {
      color: inherit;
      font-weight: bold;
    }
  }
  &__title {
    width: 100%;
    justify-content: flex-start;
    span {
      margin-left: 10px;
      padding-top: 8px;
      font-size: 12px;
      font-weight: bold;
    }
  }
  &__questions {
    width: 100%;
    align-items: flex-start;
    .item {
      padding-bottom: 30px;
      img {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
  &__contact {
    width: 100%;
    margin-top: 30px;
  }
  &__note {
    font-weight: bold;
    color: black;
    img {
      width: 50px;
      margin-top: 40px;
    }
  }
}
</style>
