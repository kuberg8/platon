<template>
  <section id="about" class="about container">
    <div class="about__text">
      <h1>О нас</h1>
      <div v-html="text" />
    </div>
  </section>
</template>

<script setup>
const text = `В 2014 году была основана Столярная Мастерская <b>ПЛАТОН</b>.<br>
Началось все с детской кроватки, изготовленной подручным инструментом, а выросло в целое производство по изготовлению <b>мебель из массива, кухонь, лестниц</b> и многого другого.<br><br>
<b>Мы росли и развивались</b>, добивались качества, не боялись учиться чему-то новому, так как время течёт, а с ним  и мода на интерьер и нужно шагать в ногу со временем. Сейчас мы уже многое умеем, большой опыт за плечами, но мы не перестаём изучать и изготавливать интересные, порой необычные вещи.
<br><br><b>Каждый наш заказ</b> это творческий процесс, мысли и желания заказчика, корректировки, обсуждения и в итоге каждый раз мы и наши клиенты  получаем удовольствие от результата! Индивидуальный подход к каждому клиенту и внимательность к деталям помогает добиться нам высоких результатов и радовать вас своими изделиями.`
</script>

<style lang="scss">
.about {
  display: flex;
  background-size: cover;
  background-image: url('/assets/images/about-mobile.png');

  @include media-breakpoint-up(lg) {
    background-image: url('/assets/images/about.png');
  }

  &__text {
    display: flex;
    flex-direction: column;
    row-gap: rem(30);
    width: rem(211);
    font-size: rem(14);
    line-height: rem(18);
    padding: rem(50) 0 rem(27);

    @include media-breakpoint-up(lg) {
      font-size: rem(18);
      row-gap: rem(80);
      width: rem(767);
      padding: rem(116.23) rem(32);
      line-height: 202.9%;
    }
  }
}
</style>
