var allColor = ["Blue", "Green", "Red", "Purple", "White", "Black", "Yellow"];
var optionPosition = ["Center","CenterAndExpand","Start","StartAndExpand","End","EndAndExpand"];
var optionBool = ["True","False"];
var dummy = {
    attrs: {
        BackgroundColor: allColor,
        WidthRequest:null,
        HeightRequest:null,
        Margin:null,
        Padding:null,
        HorizontalOptions:optionPosition,
        VerticalOptions:optionPosition,
        IsVisible:optionBool,
        Opacity:null,
        TranslationX:null,
        TranslationZ:null,
        Width:null,
        Height:null,
        "Grid.Column":null,
        "Grid.ColumnSpan":null,
        "Grid.Row":null,
        "Grid.RowSpan":null,
        

    },
    children: []
  };

  var tags = {
    //"!top": ["top"],
    "!attrs": dummy.attrs,
    Frame:{
        attrs: {
            CornerRadius: null
        }
    },
    StackLayout: {
      attrs: {
        Orientation : ["Vertical", "Horizontal"]
      }
    },
    Label: {
        attrs: {
          TextColor : allColor,
          Text: ""
        }
      },
    Button: {
        attrs: {
          TextColor : allColor,
          Text: ""
        }
      },
      BoxView:null,
      ScrollView:null,
      Entry:null,
    Grid:{
        attrs: {
            ColumnSpacing:null,
            RowSpacing:null
        }
        //children: ["Grid.RowDefinitions", "Grid.ColumnDefinitions"]
      },
      "Grid.RowDefinitions":{
        children: ["RowDefinitions"]
        },
        "Grid.ColumnDefinitions":{
            children: ["ColumnDefinitions"]
            }
  };