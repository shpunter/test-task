// import uuid from 'uuid/v4';

// const createUser = () => {
//     return { 
//         empId: uuid(), 
//         empName: 'Name Surname', 
//         empActive: ( () => Math.random() < 0.7 )(), // chance 70% that will be value: true
//         empDepartment: ( () => {
//             let title = '';
//             const rand = Math.random();

//             if (rand < 0.1) title = 'HR'
//             else if (rand < 0.3) title = 'Junior QA'
//             else if (rand < 0.5) title = 'Middle QA'
//             else if (rand < 0.53) title = 'Senior QA'
//             else if (rand < 0.8) title = 'Junior Developer' 
//             else if (rand < 0.97) title = 'Middle Developer' 
//             else if (rand <= 1) title = 'Senior Developer'
            
//             return title;
//         })()
//     }
// };

let usersArray = [
  {
    empId: "7d7d6f4f-820b-4e8d-b2d1-339dc4c50a1e",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "f41f2d81-5cae-43e7-b2ce-39684a86301a",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior QA"
  },
  {
    empId: "ab714199-c7e9-402f-a5e7-f085af95633a",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "8614ae11-c463-441c-924b-b80c894556f2",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "e644b530-aa52-40b1-bb67-5bf459a1922e",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "HR"
  },
  {
    empId: "1be81e6c-b44c-4b3f-8eb5-878439ab07fd",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "HR"
  },
  {
    empId: "531bc107-cd7a-4e06-8200-3a99199192cc",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior QA"
  },
  {
    empId: "55132200-267d-4aa2-91bf-459baf6043c0",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior QA"
  },
  {
    empId: "09523db8-cda2-4acb-8350-dd12ccccb5a6",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Senior Developer"
  },
  {
    empId: "45127c14-6852-4dd3-bc07-a106770d1de6",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "HR"
  },
  {
    empId: "4e239d1b-656d-4d6e-9d0c-db978cd90da8",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior QA"
  },
  {
    empId: "f7ee38fb-ba29-4337-884b-00ce38d69f3f",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior QA"
  },
  {
    empId: "27f5fe47-ebd5-484c-9c2d-620a784cf58e",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "90a84061-a90e-4694-bf53-eb6f9c845234",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle Developer"
  },
  {
    empId: "76b8db6b-7d6e-4400-b2a8-28b74040bbe4",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Middle QA"
  },
  {
    empId: "9b9805c1-e868-42d4-b918-defe05b2ea69",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle QA"
  },
  {
    empId: "a4a37613-f8cb-4587-bfa2-8dd5dd01c28f",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "HR"
  },
  {
    empId: "615d820f-ff4a-4d83-81d2-f9f7bf5f437c",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "e8fe2059-f590-4ec3-b669-1765fc74c730",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior Developer"
  },
  {
    empId: "31415470-c8af-4807-a35c-6d42319827a1",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle QA"
  },
  {
    empId: "25fa54e7-9c21-415e-ae61-1a7bc110840c",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior Developer"
  },
  {
    empId: "1f72c672-9a52-4c20-8148-dc3443e12923",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Middle QA"
  },
  {
    empId: "c0ac1c86-d9c7-42d3-b9b4-dbb1d9000992",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle QA"
  },
  {
    empId: "e971c337-3552-4747-8e54-4509a0c20ef6",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "f7f6af87-3ce9-43fb-a28d-757f9c7e7963",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle Developer"
  },
  {
    empId: "8abf4af8-3f9a-4d06-8094-bcaa40ea33e3",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior Developer"
  },
  {
    empId: "e2034668-bb61-4a35-8cfe-d3f4dcb4c5d9",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle Developer"
  },
  {
    empId: "9534f5b6-5d6e-4105-aea8-e94ffd94b635",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "HR"
  },
  {
    empId: "1d1fa3a8-d96d-4f5c-81c6-f1fa776b0569",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior Developer"
  },
  {
    empId: "d7fc9659-029b-46b0-adfb-13910cc1d1b5",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Middle Developer"
  },
  {
    empId: "9e248ae6-8e84-4c62-a95f-dafef486b09c",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "89228a76-2d5d-488d-98ee-517f021b914e",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle Developer"
  },
  {
    empId: "ed7972df-8d52-4915-9fd3-658d12418c7a",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior QA"
  },
  {
    empId: "44181269-85a5-46d3-a9f1-e99ae15f091b",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle Developer"
  },
  {
    empId: "f7e63681-a150-4885-9485-e5d4a24fd935",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior QA"
  },
  {
    empId: "49c68ae0-458c-4f9c-b4b6-c745e54266bb",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "4992b4c4-6bb0-4343-b49a-3cc0b9d97a9e",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "HR"
  },
  {
    empId: "02c82724-e229-4b09-95ed-5aa770a75cbf",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Senior QA"
  },
  {
    empId: "7da2c9ed-04c8-49d8-98fe-075cb40d7318",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior Developer"
  },
  {
    empId: "6e2e409f-ff92-4720-aefb-f67b8efb2947",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "HR"
  },
  {
    empId: "ed865043-1cb7-4463-b0cc-1d5963c17895",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Middle Developer"
  },
  {
    empId: "9aec8c87-ef58-4eb4-ab0b-e92a2a2d6597",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior Developer"
  },
  {
    empId: "b5b2c57a-8443-4a22-971c-caf7d4cb0e93",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Middle QA"
  },
  {
    empId: "adfc208d-77c3-42b3-89a0-033c63fa7c82",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior QA"
  },
  {
    empId: "6cf4e4aa-c2c0-4957-8043-04a4514295b8",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior QA"
  },
  {
    empId: "8bec0a50-5bfc-42b9-8e77-e175e1453b81",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior Developer"
  },
  {
    empId: "b6db9789-d5de-4bee-8839-49030dc4ac09",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Senior Developer"
  },
  {
    empId: "13c25175-4e7b-48ce-a126-25718c542e10",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle Developer"
  },
  {
    empId: "69aa78a2-1099-44dc-b3c1-f062de5698ff",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "HR"
  },
  {
    empId: "9d588972-7d26-40be-ab5f-2bf3b8205269",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Middle Developer"
  },
  {
    empId: "a4fd31b1-8b70-4f0c-b888-90ad2ae7ed74",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Middle QA"
  },
  {
    empId: "92592cd2-ae5e-483d-a252-c1683744429a",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior Developer"
  },
  {
    empId: "ca524f02-2b17-40a2-9d48-b6d2d4ab4caa",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle Developer"
  },
  {
    empId: "7874346e-359e-4fb0-8c76-ad6c612e24ad",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Senior QA"
  },
  {
    empId: "ed7c8611-3c6a-4ae0-8ac6-8afe90345512",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior QA"
  },
  {
    empId: "f16bee4d-a34a-4197-a192-49514ccb5513",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Senior QA"
  },
  {
    empId: "9122ffc6-5b03-41d5-84ae-5d02792bd455",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle QA"
  },
  {
    empId: "b4f1258b-5781-4030-9226-480f20dd5b9e",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle QA"
  },
  {
    empId: "a7febda2-55a2-495d-a062-81d1640ee945",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "0fcabd08-9dfa-4efd-964d-5be6a6d5af5c",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Senior Developer"
  },
  {
    empId: "56e6d6c6-353d-4eac-85b7-c011f07cb72e",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "HR"
  },
  {
    empId: "16195854-9da0-4d79-a385-ce41201e1d64",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "9f983380-0f52-486f-baaa-a2c21bc22a98",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "1ba869e5-2643-47f8-bd78-a1b3b588518b",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior Developer"
  },
  {
    empId: "26db51dc-b794-4731-b88b-f25ca014790f",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle QA"
  },
  {
    empId: "60793382-7af7-48c2-aef7-2134151e050f",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior QA"
  },
  {
    empId: "1a18d8b2-c2fd-4922-87e8-93f7cfe9669a",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "072f1d55-b69b-47f9-89a8-054071baf2ac",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "HR"
  },
  {
    empId: "8b31630a-941d-4804-8d58-b5b23f98a45f",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "HR"
  },
  {
    empId: "971e434b-5ef4-4099-ba50-ff22c4b2ca3f",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior Developer"
  },
  {
    empId: "bc194d93-e4e7-410a-92f2-2232f0b1ffa7",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior Developer"
  },
  {
    empId: "c586a2ff-17cb-4c79-b4b2-45c8d9af4ec2",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle Developer"
  },
  {
    empId: "7e6a1114-c78b-4151-8cc7-cf91bbda76da",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "HR"
  },
  {
    empId: "c757bd72-403d-4d9c-90bd-710822ae2d2c",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior QA"
  },
  {
    empId: "72443e29-839d-4f26-a9ce-15eb32f6a073",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "df7a84b6-c3d5-455f-973b-67e1ea1f472a",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior QA"
  },
  {
    empId: "d996cc22-a8b9-4fa7-b0c1-d26affcb079d",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior QA"
  },
  {
    empId: "30608a2a-34a5-4a99-8486-8cfb66c66792",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "ee51c9c2-99bc-4dda-acd0-a736d3e157ec",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle QA"
  },
  {
    empId: "bf9b2f59-adc2-48ea-a97d-386b988b3c6d",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle QA"
  },
  {
    empId: "e39b7b56-4b12-4601-bcd4-e7c0ba54a568",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle Developer"
  },
  {
    empId: "2c3521c7-1fcb-4ec7-9a70-fd134459e880",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior 5Developer"
  },
  {
    empId: "18dc969e-e9a8-488f-8f49-51a5640d13dd",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "26ed09e3-b910-4140-806d-c761db706381",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Junior QA"
  },
  {
    empId: "17254f41-b058-4027-b1d3-691c09a43915",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Middle Developer"
  },
  {
    empId: "279b0e72-97f3-4ae8-8489-a46a273c8b82",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "HR"
  },
  {
    empId: "124a2fe7-c8c5-4ff6-a9f9-b1a107035425",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "HR"
  },
  {
    empId: "a1c9ceab-b695-4b24-9e2f-75e2e1dbf2a6",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "821a2cfd-1c75-40ca-b240-df1c4f0c2024",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "HR"
  },
  {
    empId: "e12cc12e-11de-4158-a324-06fe275cd425",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Senior Developer"
  },
  {
    empId: "9880ff5e-576e-4e75-9396-3cc02cf58da4",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle Developer"
  },
  {
    empId: "6edcbc74-6152-4deb-bf2f-b93fb0f4d524",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle QA"
  },
  {
    empId: "7f6a3062-4d96-4461-b005-6c308fb3e8f8",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Middle QA"
  },
  {
    empId: "013528ef-5e6a-4381-afdc-67953d131345",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle Developer"
  },
  {
    empId: "0c82e7b2-9562-40ba-82c7-705f31236e20",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "27ebe352-944a-436d-9fcb-3bbc70f9f73b",
    empName: "Name Surname",
    empActive: false,
    empDepartment: "Middle QA"
  },
  {
    empId: "19b16158-0a4d-4324-b024-f8e1ad898837",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Senior QA"
  },
  {
    empId: "cc104064-95ee-4fab-b7a8-626c198e2b8a",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior QA"
  },
  {
    empId: "b31a7e84-69c5-4cb0-9f25-ca718735918a",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Junior Developer"
  },
  {
    empId: "14422d36-5d26-41ae-a405-0c21d05edfcb",
    empName: "Name Surname",
    empActive: true,
    empDepartment: "Middle Developer"
  }
];

const getUrlParams = (params) => {
    const url = new URL(`http://www.sss.com${params}`);
    
    return {
        page: url.searchParams.get('page'),
        search: url.searchParams.get('search'),
    }
}

export const fetchUsers = async (urlParams) => {
    console.log(urlParams);
    // const users = [];
    // for (let i = 0; i < 100; i++){
        // users.push( createUser() )
    // }
    const itemsPerPage = 6;
    let users = [];

    let { page, search } = getUrlParams(urlParams);
    page = +page - 1;
    page = page < 0 || isNaN(page) ? 0 : page;

    let itemsToShow = page * itemsPerPage;

    users = search.length 
        ? usersArray.filter(user => user.empDepartment.toLowerCase().indexOf(search.toLowerCase()) > -1) 
        : usersArray

    const pagesLength = Math.ceil(users.length / itemsPerPage);

    users = users.slice(itemsToShow, itemsToShow + itemsPerPage);

    return JSON.stringify({ users, pagesLength });
};

export const removeUserFetch = async (id) => {
    usersArray = usersArray.filter(user => user.empId !== id)
}
