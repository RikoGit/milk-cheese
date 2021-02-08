import { ADD_CARD_IN_CART, DELETE_CARD_IN_CART } from "./actions.js";

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_CARD_IN_CART: {
      const cards = state.cards.map((card) => {
        /*        let a = card;
        if (card.id === payload) {
          a = { ...card, countInCart: card.countInCart + 1 };
        }

        return a;
      */
        if (card.id === payload) {
          return { ...card, countInCart: card.countInCart + 1 };
        }

        return card;
      });

      return {
        ...state,
        cards,
      };
    }

    case DELETE_CARD_IN_CART: {
      const cards = state.cards.map((card) => {
        if (card.id === payload) {
          return { ...card, countInCart: card.countInCart - 1 };
        }

        return card;
      });

      return {
        ...state,
        cards,
      };
    }

    /* // clear image
    case SET_INITIAL_IMAGE: {
      return {
        ...state,
        preview: {
          ...state.preview,
          image: {
            ...initialPreview.image,
            src: state.preview.image.src,
          },
        },
      };
    }

    case SET_FONT_SIZE: {
      return {
        ...state,
        preview: {
          ...state.preview,
          text: {
            ...state.preview.text,
            fontSize: payload,
          },
        },
      };
    }

    case SET_BACKGROUND: {
      const colors = [...state.preview.background.colors];
      colors[payload.index] = payload.color;

      return {
        ...state,
        preview: {
          ...state.preview,
          background: { ...state.preview.background, colors },
        },
      };
    }

    case ADD_BACKGROUND_COLOR: {
      const colors = [...state.preview.background.colors];
      colors.push("#ffffff");

      const percentages = [0, 1];
      const percentagesLength = colors.length;
      if (percentagesLength > 2) {
        const percentagesStep = 1 / (percentagesLength - 1);
        for (let i = 0; i < percentagesLength - 2; i++) {
          percentages.splice(i + 1, 0, (percentagesStep * (i + 1)).toFixed(1));
        }
      }

      return {
        ...state,
        preview: {
          ...state.preview,
          background: { ...state.preview.background, colors, percentages },
        },
      };
    }

    case SET_LINK_CONTROL: {
      return {
        ...state,
        linkControlIsActive: !state.linkControlIsActive,
        imageControlIsActive: false,
        textControlIsActive: false,
        backgroundControlIsActive: false,
      };
    }

    case SET_BACKGROUND_CONTROL: {
      return {
        ...state,
        backgroundControlIsActive: !state.backgroundControlIsActive,
        linkControlIsActive: false,
        imageControlIsActive: false,
        textControlIsActive: false,
      };
    }

    case SET_IMAGE_CONTROL: {
      return {
        ...state,
        imageControlIsActive: !state.imageControlIsActive,
        linkControlIsActive: false,
        backgroundControlIsActive: false,
        textControlIsActive: false,
      };
    }

    case SET_TEXT_CONTROL: {
      return {
        ...state,
        textControlIsActive: !state.textControlIsActive,
        linkControlIsActive: false,
        imageControlIsActive: false,
        backgroundControlIsActive: false,
      };
    }

    case SET_BACKGROUND_GRADIENT: {
      return {
        ...state,
        preview: {
          ...state.preview,
          background: { ...state.preview.background, gradient: payload },
        },
      };
    }

    case SET_BACKGROUND_DIRECTION: {
      return {
        ...state,
        preview: {
          ...state.preview,
          background: { ...state.preview.background, direction: payload },
        },
      };
    }

    case SET_TEXT_VALUE: {
      return {
        ...state,
        preview: {
          ...state.preview,
          text: { ...state.preview.text, value: payload },
        },
      };
    }

    case SET_TEXT_COLOR: {
      return {
        ...state,
        preview: {
          ...state.preview,
          text: { ...state.preview.text, color: payload },
        },
      };
    }

    case SET_LINK: {
      return {
        ...state,
        preview: {
          ...state.preview,
          link: payload,
        },
      };
    }

    case SET_IMAGE: {
      return {
        ...state,
        preview: {
          ...state.preview,
          image: { ...state.preview.image, src: payload },
        },
      };
    }

    case IMAGE_LOADED: {
      console.log("load");
      return {
        ...state,
        preview: {
          ...state.preview,
          image: {
            ...state.preview.image,
            //...initialPreview.image,
            src: state.preview.image.src,
            isLoaded: payload,
          },
        },
      };
    }

    case SET_IMAGE_SIZE: {
      console.log("size");
      return {
        ...state,
        preview: {
          ...state.preview,
          image: {
            ...state.preview.image,
            width: payload.scaledWidth,
            height: payload.scaledHeight,
            startX: payload.startX || initialPreview.image.startX,
            startY: payload.startY || initialPreview.image.startY,
            endX: payload.endX || initialPreview.image.endX,
            endY: payload.endY || initialPreview.image.endY,
          },
        },
      };
    }

    case SET_IMAGE_HAS_ERROR: {
      return {
        ...state,
        preview: {
          ...state.preview,
          image: { ...state.preview.image, hasError: payload },
        },
      };
    }
*/
    default:
      return state;
  }
};
