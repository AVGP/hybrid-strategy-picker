var ChoiceCtrl = function($scope) {
    var choices = {
        start: {
            question: "Javascript or HTML/CSS/JS?",
            options: [{id: "javascript", text: "Javascript only"}, {id: "html", text: "HTML/CSS/JS"}]
        },
        javascript: {
            question: "Do you have experience with mobile web development?",
            options: [{id: "titanium", text: "No, not really"}, {id: "sencha", text: "Hell yes!"}]
        },
        titanium: {
            name: "Appcelerator Titanium",
            url: "https://www.appcelerator.com/platform/titanium-platform/" 
        },
        sencha: {
            name: "Sencha Touch",
            url: "http://www.sencha.com/products/touch-bundle/"
        },
        html: {
            question: "Do you have a favourite framework?",
            options: [{id: "kendo", text: "No"}, {id: "frameworks", text: "Of course, it is..."}]
        },
        kendo: {
            name: "Kendo UI",
            url: "http://www.kendoui.com/"
        },        
        frameworks: {
            question: "Is it Angular?",
            options: [{id: "yes", text: "Oh yeah!"}, {id: "no", text: "Nah..."}]
        },        
        yes: {
            name: "Lungo Angular Bridge",       
            url: "https://github.com/centralway/lungo-angular-bridge"
        },
        no: {
            name: "Your framework + Cordova",
            url: "http://www.cordova.io"                    
        }        
    } //End of choices
    
    $scope.currentChoice = choices.start;

    $scope.select = function(id) {
        $scope.currentChoice = choices[id];
    }
}