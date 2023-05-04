import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';


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

      <div class="flex mt-20">
        <Slot />
      </div>

    </>
  );
});
