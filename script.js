/**
 * Created by Tatka on 18.08.14.
 */
function demoDocument(id, name){
    var self = this;

    self.id = ko.observable(id);
    self.name = ko.observable(name);
    self.Selected = ko.observable(false);
}
function viewModel(){
    var self = this;

    self.epost = ko.observable();
    self.Theme = ko.observable();
    self.message = ko.observable();

    self.availableItems = ko.observableArray();
    self.availableItemIds = ko.observableArray();
    self.newDocumentList = ko.observableArray();
	self.sendInformation= ko.observable(false);
    self.add = function(){
        self.availableItems.push(new demoDocument(1, "� �������� QAP INT."));
        self.availableItems.push(new demoDocument(2, "������������ ������������� ����������� ��� ������ �������."));
        self.availableItems.push(new demoDocument(3, "����������� �������������� � QAP INT."));
        self.availableItems.push(new demoDocument(4, "�������� ������� ��� ���������� HTML-5 �����������."));
        self.availableItems.push(new demoDocument(5, "�������� �������������� ����������� CLM2CRM � ��� ���������� � salesforce.com(�������)."));
        self.availableItems.push(new demoDocument(6, "�������� �������������� ����������� CLM2CRM � ��� ���������� � salesforce.com(english)."));
    };
    self.showDocument = function (item) {
        item.Selected(!(item.Selected()));
    };
    self.sendMessage = function(){
	this.sendInformation(true);
    }

 }

var viewModel = new viewModel();
ko.applyBindings(viewModel);
viewModel.add();

