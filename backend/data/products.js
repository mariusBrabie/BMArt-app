const products = [
  {
    name: 'Ascutitoare pentru mine Faber Castell',
    image: '/images/Ascutitoare_pentru_mine_Faber_Castell.jpg',
    brand: 'Faber Castell',
    category: 'Accesorii',
    price: 6.0,
    countInStock: 10,
    rating: 4.3,
    numReviews: 12
  },
  {
    name: 'Ascutitoare tripla Faber Castell',
    image: '/images/Ascutitoare_tripla_Faber_Castell.jpg',
    brand: 'Faber Castell',
    category: 'Accesorii',
    price: 3.5,
    countInStock: 16,
    rating: 4.5,
    numReviews: 8
  },
  {
    name: 'Betisoare de vata Meyco',
    image: '/images/Betisoare_de_vata_Meyco.jpg',
    brand: 'Meyco',
    category: 'Accesorii',
    price: 4.8,
    countInStock: 20,
    rating: 4,
    numReviews: 2
  },
  {
    name: 'Bloc Canson black',
    image: '/images/Bloc_Canson_black.jpg',
    brand: 'Canson',
    category: 'Hartie desen',
    price: 62.0,
    countInStock: 10,
    rating: 4.8,
    numReviews: 20
  },
  {
    name: 'Bloc Canson Bristol',
    image: '/images/Bloc_Canson_Bristol.jpg',
    brand: 'Canson',
    category: 'Hartie desen',
    price: 45.0,
    countInStock: 7,
    rating: 4.1,
    numReviews: 9
  },
  {
    name: 'Bloc Canson imagine mix media',
    image: '/images/Bloc_Canson_imagine_mix_media.jpg',
    brand: 'Canson',
    category: 'Hartie desen',
    price: 34.0,
    countInStock: 11,
    rating: 3.5,
    numReviews: 4
  },
  {
    name: 'Bloc Canson xl kraft',
    image: '/images/Bloc_Canson_xl_kraft.jpg',
    brand: 'Canson',
    category: 'Hartie desen',
    price: 80.0,
    countInStock: 5,
    rating: 4.5,
    numReviews: 9
  },
  {
    name: 'Bloc Desen Canson xl recycled',
    image: '/images/Bloc_Desen_Canson_xl_recycled.jpg',
    brand: 'Canson',
    category: 'Hartie desen',
    price: 85.0,
    countInStock: 19,
    rating: 5,
    numReviews: 1
  },
  {
    name: 'Bloc figueras uleiacril 290g Canson',
    image: '/images/Bloc_figueras_ulei_acril_290g_Canson.jpg',
    brand: 'Canson',
    category: 'Hartie desen',
    price: 35.0,
    countInStock: 18,
    rating: 3.0,
    numReviews: 2
  },
  {
    name: 'Bloc Montval acuarela gf 300g Canson',
    image: '/images/Bloc_Montval_acuarela_gf_300g_Canson.jpg',
    brand: 'Canson',
    category: 'Hartie desen',
    price: 4.0,
    countInStock: 10,
    rating: 4.5,
    numReviews: 4
  },
  {
    name: 'Bloc schite 190 gmp nostalgie Hahnemuhle',
    image: '/images/Bloc_schite_190_gmp_nostalgie_Hahnemuhle.jpg',
    brand: 'Hahnemuhle',
    category: 'Hartie desen',
    price: 124.5,
    countInStock: 10,
    rating: 4.5,
    numReviews: 18
  },
  {
    name: 'Blocuri de desen Canson ca grain',
    image: '/images/Blocuri_de_desen_Canson_ca_grain.jpg',
    brand: 'Canson',
    category: 'Hartie desen',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 1
  },
  {
    name: 'Caiet de schite Canson art book universal',
    image: '/images/Caiet_de_schite_Canson_art_book_universal.jpg',
    brand: 'Canson',
    category: 'Hartie desen',
    price: 55.0,
    countInStock: 10,
    rating: 4.0,
    numReviews: 3
  },
  {
    name: 'Capac protector pentru creioane Standardgraph',
    image: '/images/Capac_protector_pentru_creioane_Standardgraph.jpg',
    brand: 'Standardgraph',
    category: 'Accesorii',
    price: 4.5,
    countInStock: 30,
    rating: 4.5,
    numReviews: 10
  },
  {
    name: 'Creioane grafit Lyra Rembrandt art design',
    image: '/images/Creioane_grafit_Lyra_Rembrandt_art_design.jpg',
    brand: 'Lyra Rembrandt',
    category: 'Creioane',
    price: 3.5,
    countInStock: 25,
    rating: 4.5,
    numReviews: 12
  },
  {
    name: 'Creioane grafit pentru schite Derwent sketching',
    image: '/images/Creioane_grafit_pentru_schite_Derwent_sketching.jpg',
    brand: 'Derwent',
    category: 'Creioane',
    price: 3.5,
    countInStock: 30,
    rating: 4.5,
    numReviews: 17
  },
  {
    name: 'Creion carbune alb artificial Gioconda 8812 Koh-i-noor',
    image: '/images/Creion_carbune_alb_artificial_Gioconda_8812_Koh-i-noor.jpg',
    brand: 'Koh-i-noor',
    category: 'Creioane',
    price: 5.5,
    countInStock: 10,
    rating: 3.5,
    numReviews: 10
  },
  {
    name: 'Creion carbune natural pitt charcoal Faber Castell',
    image: '/images/Creion_carbune_natural_pitt_charcoal_Faber_Castell.jpg',
    brand: 'Faber Castell',
    category: 'Creioane',
    price: 6.0,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12
  },
  {
    name: 'Creion carbune presat pitt charcoal Faber Castell',
    image: '/images/Creion_carbune_presat_pitt_charcoal_Faber_Castell.jpg',
    brand: 'Faber Castell',
    category: 'Creioane',
    price: 6.0,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12
  },
  {
    name: 'Creion cu carbune Lyra Rembrandt carbon',
    image: '/images/Creion_cu_carbune_Lyra_Rembrandt_carbon.jpg',
    brand: 'Lyra',
    category: 'Creioane',
    price: 5.5,
    countInStock: 10,
    rating: 4,
    numReviews: 13
  },
  {
    name: 'Creion grafit acuarelabil Gioconda aquarell 8800 Koh-i-noor',
    image:
      '/images/Creion_grafit_acuarelabil_Gioconda_aquarell_8800_Koh-i-noor.jpg',
    brand: 'Koh-i-noor',
    category: 'Creioane',
    price: 3.5,
    countInStock: 19,
    rating: 4,
    numReviews: 3
  },
  {
    name: 'Creion grafit Faber Castell 9000',
    image: '/images/Creion_grafit_Faber_Castell_9000.jpg',
    brand: 'Faber Castell',
    category: 'Creioane',
    price: 4.3,
    countInStock: 10,
    rating: 5,
    numReviews: 23
  },
  {
    name: 'Creion gros grafit fara lemn pitt Faber Castell',
    image: '/images/Creion_gros_grafit_fara_lemn_pitt_Faber_Castell.jpg',
    brand: 'Faber Castell',
    category: 'Creioane',
    price: 6.5,
    countInStock: 16,
    rating: 4,
    numReviews: 8
  },
  {
    name: 'Creion mecanic Faber Castell tk 9400',
    image: '/images/Creion_mecanic_Faber_Castell_tk_9400.jpg',
    brand: 'Faber Castell',
    category: 'Creioane',
    price: 17.5,
    countInStock: 11,
    rating: 4.5,
    numReviews: 6
  },
  {
    name: 'Creion mecanic Faber Castell vario l',
    image: '/images/Creion_mecanic_Faber_Castell_vario_l.jpg',
    brand: 'Faber Castell',
    category: 'Creioane',
    price: 20.5,
    countInStock: 8,
    rating: 4,
    numReviews: 16
  },
  {
    name: 'Creion mecanic grip plus',
    image: '/images/Creion_mecanic_grip_plus.jpg',
    brand: 'Faber Castell',
    category: 'Creioane',
    price: 22.0,
    countInStock: 14,
    rating: 4,
    numReviews: 2
  },
  {
    name: 'Creion mecanic Staedtler mars micro',
    image: '/images/Creion_mecanic_Staedtler_mars_micro.jpg',
    brand: 'Staedtler',
    category: 'Creioane',
    price: 15.5,
    countInStock: 16,
    rating: 4.5,
    numReviews: 10
  },
  {
    name: 'Creion mecanic Staedtler mars technico I',
    image: '/images/Creion_mecanic_Staedtler_mars_technico_I.jpg',
    brand: 'Staedtler',
    category: 'Creioane',
    price: 18.0,
    countInStock: 19,
    rating: 3.5,
    numReviews: 1
  },
  {
    name: 'Creion mecanic Staedtler mars technico',
    image: '/images/Creion_mecanic_Staedtler_mars_technico.jpg',
    brand: 'Staedtler',
    category: 'Creioane',
    price: 18.5,
    countInStock: 8,
    rating: 4,
    numReviews: 2
  },
  {
    name: 'Creion radiera cu perie',
    image: '/images/Creion_radiera_cu_perie.jpg',
    brand: 'Staedtler',
    category: 'Accesorii',
    price: 7.5,
    countInStock: 10,
    rating: 4,
    numReviews: 13
  },
  {
    name: 'Cutie lemn pentru carbune meyco',
    image: '/images/Cutie_lemn_pentru_carbune_meyco.jpg',
    brand: 'Meyco',
    category: 'Accesorii',
    price: 26.0,
    countInStock: 10,
    rating: 4,
    numReviews: 1
  },
  {
    name: 'Fixativ creion si carbune Conte a Paris',
    image: '/images/Fixativ_creion_si_carbune_Conte_a_Paris.jpg',
    brand: 'Conte a Paris',
    category: 'Accesorii',
    price: 35.0,
    countInStock: 12,
    rating: 4.5,
    numReviews: 10
  },
  {
    name: 'Fixativ spray Koh-i-noor',
    image: '/images/Fixativ_spray_Koh-i-noor.jpg',
    brand: 'Kooh-i-noor',
    category: 'Accesorii',
    price: 26.5,
    countInStock: 6,
    rating: 4,
    numReviews: 12
  },
  {
    name: 'Mine pentru creioanele mecanice Rotring tikky',
    image: '/images/Mine_pentru_creioanele_mecanice_Rotring_tikky.jpg',
    brand: 'Rotring',
    category: 'Accesorii',
    price: 9.0,
    countInStock: 10,
    rating: 4,
    numReviews: 1
  },
  {
    name: 'Mine Staedtler mars micro carbon 250',
    image: '/images/Mine_Staedtler_mars_micro_carbon_250.jpg',
    brand: 'Staedtler',
    category: 'Accesorii',
    price: 8.5,
    countInStock: 10,
    rating: 4,
    numReviews: 7
  },
  {
    name: 'Mine Staedtler mars micro carbon 255',
    image: '/images/Mine_Staedtler_mars_micro_carbon_255.jpg',
    brand: 'Staedtler',
    category: 'Accesorii',
    price: 6.5,
    countInStock: 10,
    rating: 4.5,
    numReviews: 8
  },
  {
    name: 'Prelungitor pentru creioane Standardgraph',
    image: '/images/Prelungitor_pentru_creioane_Standardgraph.jpg',
    brand: 'Standardgraph',
    category: 'Accesorii',
    price: 10.5,
    countInStock: 22,
    rating: 4.5,
    numReviews: 16
  },
  {
    name: 'Pudra de grafit Koh-i-noor',
    image: '/images/Pudra_de_grafit_Koh-i-noor.jpg',
    brand: 'Kooh-i-noor',
    category: 'Accesorii',
    price: 21.0,
    countInStock: 3,
    rating: 3,
    numReviews: 2
  },
  {
    name: 'Radiera cu maner Staedtler mars plastic',
    image: '/images/Radiera_cu_maner_Staedtler_mars_plastic.jpg',
    brand: 'Staedtler',
    category: 'Accesorii',
    price: 18.0,
    countInStock: 10,
    rating: 4,
    numReviews: 5
  },
  {
    name: 'Radiera electrica Derwent',
    image: '/images/Radiera_electrica_Derwent.jpg',
    brand: 'Derwent',
    category: 'Accesorii',
    price: 34.5,
    countInStock: 17,
    rating: 4.5,
    numReviews: 19
  },
  {
    name: 'Radiera Faber Castell dust free',
    image: '/images/Radiera_Faber_Castell_dust_free.jpg',
    brand: 'Faber Castell',
    category: 'Accesorii',
    price: 7.0,
    countInStock: 10,
    rating: 4,
    numReviews: 6
  },
  {
    name: 'Radiera Tombow mono zero cu varf rectangular',
    image: '/images/Radiera_Tombow_mono_zero_cu_varf_rectangular.jpg',
    brand: 'Tombow',
    category: 'Accesorii',
    price: 15.5,
    countInStock: 8,
    rating: 4.5,
    numReviews: 2
  },
  {
    name: 'Radiera Tombow mono zero cu varf circular',
    image: '/images/Radiera_Tombow_mono_zero_cu_varf_circular.jpg',
    brand: 'Tombow',
    category: 'Accesorii',
    price: 15.5,
    countInStock: 10,
    rating: 4.5,
    numReviews: 3
  },
  {
    name: 'Rezerva pentru radiera Tombow mono zero cu varf rectangular',
    image:
      '/images/Rezerva_pentru_radiera_Tombow_mono_zero_cu_varf_rectangular.jpg',
    brand: 'Tombow',
    category: 'Accesorii',
    price: 9.5,
    countInStock: 5,
    rating: 4,
    numReviews: 2
  },
  {
    name: 'Rezerva pentru radiera Tombow mono zero cu varf circular',
    image:
      '/images/Rezerva_pentru_radiera_Tombow_mono_zero_cu_varf_circular.jpg',
    brand: 'Tombow',
    category: 'Accesorii',
    price: 9.0,
    countInStock: 2,
    rating: 4.5,
    numReviews: 4
  },
  {
    name: 'Set 5 estompe Meyco',
    image: '/images/set_5_estompe_Meyco.jpg',
    brand: 'Meyco',
    category: 'Accesorii',
    price: 2.5,
    countInStock: 1,
    rating: 4.5,
    numReviews: 12
  },
  {
    name: 'Set 12 mine creion mecanic super polymer faber castell',
    image: '/images/Set_12_mine_creion_mecanic_super_polymer_faber_castell.jpg',
    brand: 'Faber Castell',
    category: 'Accesorii',
    price: 11.5,
    countInStock: 12,
    rating: 4,
    numReviews: 4
  }
]

export default products
