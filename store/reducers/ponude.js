import { PONUDE } from '../../podaci/pocetni_podaci';
import { PROMJENA_FAVORITA } from '../actions/ponude';

import { FAVORITI } from '../../podaci/favoriti';

const pocetnoStanje = {
  ponude: PONUDE,
  filterPonude: PONUDE,
  favoritPonude: [],
};

const ponudaReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case PROMJENA_FAVORITA: {
      const odabrana = state.favoritPonude.findIndex(
        (ponuda) => ponuda.id === action.idPonude
      );
      if (odabrana >= 0) {
        const noviFavoriti = [...state.favoritPonude];
        noviFavoriti.splice(odabrana, 1);
        FAVORITI.pop(odabrana);
        return { ...state, favoritPonude: noviFavoriti };
      } else {
        const ponuda = state.ponude.find(
          (ponuda) => ponuda.id === action.idPonude
        );
        FAVORITI.push(ponuda);
        return { ...state, favoritPonude: state.favoritPonude.concat(ponuda) };
      }
    }
    default:
      return state;
  }
};
export default ponudaReducer;
