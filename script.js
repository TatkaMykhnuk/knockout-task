function demoDocument(id, name){
    var self = this;
    self.id = ko.observable(id);
    self.name = ko.observable(name);
    self.isChecked = ko.observable(false);
}
function viewModel(){
    var self = this;

    self.epost = ko.observable().extend({required: true});
    self.theme = ko.observable().extend({required: true});
    self.message = ko.observable().extend({required: true, minLength: 10});

    self.availableItems = ko.observableArray();
    self.selectedItems = ko.observableArray();
	self.isInformationSent= ko.observable(false);
    self.fillAvailableItems = function(){
        self.availableItems.push(new demoDocument(1, "О компании QAP INT."));
        self.availableItems.push(new demoDocument(2, "Преимущества использования инструмента для Вашего бизнеса."));
        self.availableItems.push(new demoDocument(3, "Перспективы сотрудничества с QAP INT."));
        self.availableItems.push(new demoDocument(4, "Описание решения для разработки HTML-5 презентаций."));
        self.availableItems.push(new demoDocument(5, "Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(русский)."));
        self.availableItems.push(new demoDocument(6, "Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(english)."));
    };

    self.sendMessage = function(){
		this.isInformationSent(true);
    }

 }

var viewModel = new viewModel();
ko.applyBindings(viewModel);
viewModel.fillAvailableItems();

