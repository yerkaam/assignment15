// Импортируем компонент
import charts from '../components/charts.vue';

// Экспортируем объект с метаданными
export default {
  title: 'charts', // Заголовок для историй
  component: charts, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { charts },
  template: '<charts :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { charts},
  template: '<charts :label="\'Another Text\'" />',
});
