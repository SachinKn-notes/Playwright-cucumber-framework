Feature: Cruise Tests

    @Regression @Sanity @Only
    Scenario Outline: ODY-2 : Cruise only test with verification
        Given UAT url with siid: <SIID>
        When Open Browser & Launch the url
        Then Validate title should be: <Title>

    Examples:
        | SIID    | Title                            |
        | 130386  | Odyssey UAT- USD: Cruise Planner |
        | 130385  | Odyssey UAT- AUD: Cruise         |

    @Regression
    Scenario Outline: ODY-589 : Cruise only Payment test with verification
        Given UAT url with siid: <SIID>
        When Open Browser & Launch the url
        Then Validate title should be: <Title>

    Examples:
        | SIID    | Title                            |
        | 130386  | Odyssey UAT- USD: Cruise Planner |
        | 130385  | Odyssey UAT- AUD: Cruise Planner |