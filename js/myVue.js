const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
const url = 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL';

// queryCond.
var vAnimalAreaPkid = new Vue({
    el: '#animalAreaPkid',
    data: {
        selected: '3',
        options: [
            { value: '2', text: '臺北市' },
            //{ value: '3', text: '新北市' },
            { value: '4', text: '基隆市' },
            { value: '5', text: '宜蘭縣' },
            { value: '6', text: '桃園縣' },
            { value: '7', text: '新竹縣' },
            { value: '8', text: '新竹市' },
            { value: '9', text: '苗栗縣' },
            { value: '10', text: '臺中市' },
            { value: '11', text: '彰化縣' },
            { value: '12', text: '南投縣' },
            { value: '13', text: '雲林縣' },
            { value: '14', text: '嘉義縣' },
            { value: '15', text: '嘉義市' },
            { value: '16', text: '臺南市' },
            { value: '17', text: '高雄市' },
            { value: '18', text: '屏東縣' },
            { value: '19', text: '花蓮縣' },
            { value: '20', text: '臺東縣' },
            { value: '21', text: '澎湖縣' },
            { value: '22', text: '金門縣' },
            { value: '23', text: '連江縣' }
        ]
    }
})

var vAnimalShelter = new Vue({
    el: '#animalShelter',
    data: {
        selected: '',
        options:
            [
                { value: '', text: '所屬收容所' },
                { value: '48', text: '基隆市寵物銀行' },
                { value: '49', text: '臺北市動物之家' },
                { value: '50', text: '新北市板橋區公立動物之家' },
                { value: '51', text: '新北市新店區公立動物之家' },
                { value: '53', text: '新北市中和區公立動物之家' },
                { value: '55', text: '新北市淡水區公立動物之家' },
                { value: '56', text: '新北市瑞芳區公立動物之家' },
                { value: '58', text: '新北市五股區公立動物之家' },
                { value: '59', text: '新北市八里區公立動物之家' },
                { value: '60', text: '新北市三芝區公立動物之家' },
                { value: '61', text: '桃園市動物保護教育園區' },
                { value: '62', text: '新竹市動物收容所' },
                { value: '63', text: '新竹縣動物收容所' },
                { value: '67', text: '臺中市動物之家南屯園區' },
                { value: '68', text: '臺中市動物之家后里園區' },
                { value: '69', text: '彰化縣流浪狗中途之家' },
                { value: '70', text: '南投縣公立動物收容所' },
                { value: '71', text: '嘉義市流浪犬收容中心' },
                { value: '72', text: '嘉義縣流浪犬中途之家' },
                { value: '73', text: '臺南市動物之家灣裡站' },
                { value: '74', text: '臺南市動物之家善化站' },
                { value: '75', text: '高雄市壽山動物保護教育園區' },
                { value: '76', text: '高雄市燕巢動物保護關愛園區' },
                { value: '77', text: '屏東縣流浪動物收容所' },
                { value: '78', text: '宜蘭縣流浪動物中途之家' },
                { value: '79', text: '花蓮縣流浪犬中途之家' },
                { value: '80', text: '臺東縣動物收容中心' },
                { value: '81', text: '連江縣流浪犬收容中心' },
                { value: '82', text: '金門縣動物收容中心' },
                { value: '83', text: '澎湖縣流浪動物收容中心' },
                { value: '89', text: '雲林縣流浪動物收容所' },
                { value: '92', text: '新北市政府動物保護防疫處' },
                { value: '96', text: '苗栗縣生態保育教育中心' }
            ]
    },
})

var vAnimalStatus = new Vue({
    el: '#animalStatus',
    data: {
        selected: 'OPEN',
        options: [
            { value: 'NONE', text: '未公告' },
            { value: 'ADOPTED', text: '已認養' },
            { value: 'DEAD', text: '死亡' },
            { value: 'OTHER', text: '其他' },
            { value: '', text: '不拘' },
        ]
    }
})

var vAnimalKind = new Vue({
    el: '#animalKind',
    data: {
        selected: '',
        options: [
            { value: '', text: '類型' },
            { value: '狗', text: '狗' },
            { value: '貓', text: '貓' }
        ]
    }
})

var vAnimalSex = new Vue({
    el: '#animalSex',
    data: {
        selected: '',
        options: [
            { value: '', text: '動物性別' },
            { value: 'M', text: '公' },
            { value: 'F', text: '母' },
        ]
    }
})

var vAnimalBodyType = new Vue({
    el: '#animalBodyType',
    data: {
        selected: '',
        options: [
            { value: '', text: '體型' },
            { value: 'SMALL', text: '小型' },
            { value: 'MEDIUM', text: '中型' },
            { value: 'BIG', text: '大型' }
        ]
    }
})

var vAnimalAge = new Vue({
    el: '#animalAge',
    data: {
        selected: '',
        options: [
            { value: '', text: '年紀' },
            { value: 'CHILD', text: '幼年' },
            { value: 'ADULT', text: '成年' }
        ]
    }
})

var vAnimalSterilization = new Vue({
    el: '#animalSterilization',
    data: {
        selected: '',
        options: [
            { value: '', text: '是否已絕育' },
            { value: 'T', text: '是' },
            { value: 'F', text: '否' },
            { value: 'N', text: '未輸入' },
        ]
    }
})

// Global Function
var mixinAnimal = new Vue.mixin({
    data: function () {
        return {
            seenCountPerPage: true,
            seenPagination: true,
        }
    },
    methods: {
        loadData: function (type) {
            vtblAnimals.serverAnimals = null;
            vpagination.seenPagination = true;
            vselectedCountPerPage.seenCountPerPage = true;
            if (type === 'submit') vpagination.initial();

            var urlGet = '';
            if ($('#animalAreaPkid option:selected').val() !== '')
                urlGet = url + "&animal_area_pkid=" + $('#animalAreaPkid option:selected').val();
            if ($('#animalShelter option:selected').val() !== '')
                urlGet = urlGet + "&animal_shelter_pkid=" + $('#animalShelter option:selected').val();
            if ($('#animalStatus option:selected').val() !== '')
                urlGet = urlGet + "&animal_status=" + $('#animalStatus option:selected').val();
            if ($('#animalKind option:selected').val() !== '')
                urlGet = urlGet + "&animal_kind=" + $('#animalKind option:selected').val();
            if ($('#animalSex option:selected').val() !== '')
                urlGet = urlGet + "&animal_sex=" + $('#animalSex option:selected').val();
            if ($('#animalBodyType option:selected').val() !== '')
                urlGet = urlGet + "&animal_bodytype=" + $('#animalBodyType option:selected').val();
            if ($('#animalAge option:selected').val() !== '')
                urlGet = urlGet + "&animal_age=" + $('#animalAge option:selected').val();
            if ($('#animalSterilization option:selected').val() !== '')
                urlGet = urlGet + "&animal_sterilization=" + $('#animalSterilization option:selected').val();



            urlGet = urlGet + "&$top=" + vselectedCountPerPage.selected + "&$skip=" + ((vpagination.currentPage - 1) * vselectedCountPerPage.selected);

            console.log(urlGet);
            axios.get(`${cors}${urlGet}`)
                .then((response) => { vtblAnimals.serverAnimals = response.data })

            $('#pagination').show();

        },
    }
})

// 每頁可顯示筆數
var vselectedCountPerPage = new Vue({
    mixins: ['mixinAnimal'],
    el: '#countPerPage',
    data: {
        seenCountPerPage: false,
        selected: '90',
        options: [{ value: '300', text: '300' }, { value: '600', text: '600' }, { value: '900', text: '900' }]
    },
    methods: {
        onChange: function () {
            vpagination.currentPage = 1;
            this.loadData();
        }
    }
})

// 上一頁、下一頁、資料正在第幾頁
var vpagination = new Vue({
    mixins: ['mixinAnimal'],
    el: '#pagination',
    data: {
        seenPagination: false,
        currentPage: 1
    },
    methods: {
        prePage: function () {
            if (this.currentPage > 1) this.currentPage = this.currentPage - 1;
            this.loadData();
        },
        nextPage: function () {
            this.currentPage = this.currentPage + 1;
            this.loadData();
        },
        initial: function () {
            vselectedCountPerPage.selected = 90;
            this.currentPage = 1;
        }
    }
})

// 查詢時
var vquery = new Vue({
    mixins: ['mixinAnimal'],
    el: '#queryButton',

})

// 查詢結果呈現
var vtblAnimals = new Vue({
    mixins: ['mixinAnimal'],
    el: '#tblAnimals',
    data: {
        serverAnimals: null,
    }
})

