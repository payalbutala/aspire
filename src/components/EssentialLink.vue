<template>
  <q-item clickable target="_blank" class="q-pa-none menu-item">
    <router-link :to="link" class="menu-item__list">
      <q-item-section v-if="icon || iconMob" avatar class="menu-item__icon">
        <q-icon :name="icon" class="q-d-display" />
        <q-icon :name="iconMob" class="q-m-display" />
      </q-item-section>
      <label class="menu-item__name">{{ title }} </label>
    </router-link>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  link?: string;
  icon?: string;
  iconMob?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
  iconMob: '',
});
</script>
<style lang="scss" scoped>
.menu-item {
  width: auto;
  min-height: auto;
  margin-bottom: 60px;
  cursor: initial !important;

  @media (max-width: $mobile) {
    width: auto;
    min-height: auto;
    margin-bottom: 60px;
    cursor: initial !important;
    flex: 1 1 auto;
    display: flex;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
  }

  :deep(.q-list) {
    @media (max-width: $mobile) {
      display: flex;
      width: 100%;
    }
  }

  &__list {
    display: flex;
    text-decoration: none;

    @media (max-width: $mobile) {
      align-items: center;
      flex-direction: column;
      margin: 0 15px;
    }

    &.router-link-active {
      .menu-item__name {
        color: $malachite-green;

        @media (max-width: $mobile) {
          font-family: $Open-sans-bold;
        }
      }
    }
  }

  &__icon {
    color: $white;
    min-width: 24px;

    @media (max-width: $mobile) {
      padding: 0;
    }
  }

  &__name {
    color: $white;
    font-size: 16px;
    line-height: 32px;
    cursor: pointer;

    @media (max-width: $mobile) {
      color: #ddd;
      font-size: 9px;
      line-height: 12px;
    }
  }
}
</style>
