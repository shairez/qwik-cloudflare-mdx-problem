import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';


import prismStyles from './prism.css?inline';
import docsStyles from './docs.css?inline';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(prismStyles);
  useStyles$(docsStyles);

  return (
    <>

      <div class="flex flex-col mt-20">
        <Slot />
      </div>

    </>
  );
});
