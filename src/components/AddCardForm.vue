<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin typModel">
      <q-form class="column" @submit="onOKClick">
        <q-list class="column">
          <q-item class="column">
            <span class="text-h6">
              {{ $t('translations.dialog.export_message') }}
            </span>
          </q-item>
          <q-item class="column">
            <cm-select
              :label="$t('language.language')"
              class="cust-multiselect"
              v-model="languageId"
              :options="languageStore.optionsWithoutNone"
            />
          </q-item>
        </q-list>
        <q-card-actions align="right">
          <cm-button mode="secondary" label="Cancel" @click="onDialogCancel" />
          <cm-button
            mode="primary"
            :label="$t('button.export')"
            type="submit"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar';
import { useLanguageStore } from 'src/store';
import { onMounted, ref } from 'vue';
import { CmButton, CmSelect } from '../lib';

defineEmits([...useDialogPluginComponent.emits]);

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();

const languageStore = useLanguageStore();

const languageId = ref('');

function onOKClick() {
  onDialogOK(languageId.value);
}
onMounted(() => languageStore.load(false));
</script>

<style scoped lang="scss">
:deep(.q-dialog-plugin.typModel) {
  width: 500px;
  padding: 16px;
}
</style>
