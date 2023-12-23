// Импортируем компонент
import listGroup from '../components/listGroup.vue';

// Экспортируем объект с метаданными
export default {
  title: 'listGroup', // Заголовок для историй
  component: listGroup, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { listGroup },
  template: '<listGroup :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { listGroup },
  template: '<listGroup :label="\'Another Text\'" />',
});