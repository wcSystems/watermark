// export const state = () => ({
//   optionwater: {}
// })

// export const getters = {
//   get_option_water: state => {
//     return {
//       optionwater: state.optionwater
//     };
//   },
// };

// export const actions = {
//   set_option_water({ commit }, optionwater) {
//     return new Promise((resolve) => {
//       try {
//         commit("mut_option_water", {
//           optionwater,
//           callback: () => {
//             resolve("successfull");
//           }
//         });
//       } catch (error) { }
//     });
//   },
// };

// export const mutations = {
//   mut_option_water(state, { optionwater, callback }) {
//     state.optionwater = optionwater;
//     callback();
//   },
// }
