const modelAddForm = {
  Komoditas: {
    type: 'type',
    required: true,
  },
  Ukuran: {
    type: 'select',
    required: true,
    options: [
      {
        value: '30',
        label: '30',
      },
      {
        value: '40',
        label: '40',
      },
      {
        value: '50',
        label: '50',
      },
      {
        value: '60',
        label: '60',
      },
      {
        value: '70',
        label: '70',
      },
      {
        value: '80',
        label: '80',
      },
      {
        value: '90',
        label: '90',
      },
      {
        value: '100',
        label: '100',
      },
      {
        value: '110',
        label: '110',
      },
      {
        value: '120',
        label: '120',
      },
      {
        value: '130',
        label: '130',
      },
      {
        value: '140',
        label: '140',
      },
      {
        value: '150',
        label: '150',
      },
      {
        value: '160',
        label: '160',
      },
      {
        value: '170',
        label: '170',
      },
      {
        value: '180',
        label: '180',
      },
      {
        value: '190',
        label: '190',
      },
      {
        value: '200',
        label: '200',
      },
    ],
  },
  Provinsi: {
    type: 'select',
    required: true,
    options: [
      {
        value: 'ACEH',
        label: 'Aceh',
      },
      {
        value: 'BALI',
        label: 'Bali',
      },
      {
        value: 'BANTEN',
        label: 'Banteng',
      },
      {
        value: 'DKI JAKARTA',
        label: 'Dki Jakarta',
      },
      {
        value: 'JAWA BARAT',
        label: 'Jawa Barat',
      },
      {
        value: 'JAWA TENGAH',
        label: 'Jawa Tengah',
      },
      {
        value: 'JAWA TIMUR',
        label: 'Jawa Timur',
      },
      {
        value: 'KALIMANTAN TIMUR',
        label: 'Kalimantan Timur',
      },
      {
        value: 'LAMPUNG',
        label: 'Lampung',
      },
      {
        value: 'SULAWESI BARAT',
        label: 'Sulawesi Barat',
      },
      {
        value: 'SUMATERA BARAT',
        label: 'Sumatera Barat',
      },
      {
        value: 'SUMATERA UTARA',
        label: 'Sumatera Utara',
      },
    ],
  },
  Kota: {
    type: 'select',
    required: true,
    options: [
      {
        value: 'ACEH KOTA',
        label: 'Aceh Kota',
      },
      {
        value: 'BULELENG',
        label: 'Buleleng',
      },
      {
        value: 'PANDEGLANG',
        label: 'Pandelang',
      },
      {
        value: 'KOTA TUA',
        label: 'Kota Tua',
      },
      {
        value: 'BANDUNG',
        label: 'Bandung',
      },
      {
        value: 'CIREBON',
        label: 'Cirebon',
      },
      {
        value: 'PEMALANG',
        label: 'Pemalang',
      },
      {
        value: 'CILACAP',
        label: 'Cilacap',
      },
      {
        value: 'PURWOREJO',
        label: 'Purworejo',
      },
      {
        value: 'TEGAL',
        label: 'Tegal',
      },
      {
        value: 'JEMBER',
        label: 'Jember',
      },
      {
        value: 'BANYUWANGI',
        label: 'Banyuwangi',
      },
      {
        value: 'SITUBONDO',
        label: 'Situbondo',
      },
      {
        value: 'PROBOLINGGO',
        label: 'Probolinggo',
      },
      {
        value: 'BORNEO',
        label: 'Borneo',
      },
      {
        value: 'LAMPUNG TIMUR',
        label: 'Lampung Timur',
      },
      {
        value: 'MAMUJU UTARA',
        label: 'Mamuju Utara',
      },
      {
        value: 'PADANG PARIAMAN',
        label: 'Padang Pariaman',
      },
      {
        value: 'MEDAN',
        label: 'Medan',
      },
      {
        value: 'DEPOK',
        label: 'Depok',
      },
      {
        value: 'CIMAHI',
        label: 'Cimahi',
      },
    ],
  },
  Harga: {
    type: 'number',
    required: true,
  },
  Tanggal: {
    type: 'date',
    format: 'dd MMMM yyyy',
    required: true,
  },
  Save: {
    // button submit
    type: 'submit',
  },
};

export default modelAddForm;
