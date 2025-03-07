Feature: Hotel Tests

    @Regression @Sanity
    Scenario Outline: ODY-2 : Cruise only test with verification
        Given UAT url with siid: <SIID>
        When Open Browser & Launch the url
        Then Validate title should be: <Title>

    Examples:
        | SIID    | Title                            |
        | 130386  | Odyssey UAT- USD: Cruise Planner |
        | 130385  | Odyssey UAT- AUD: Cruise Planner |

    @Regression
    Scenario Outline: ODY-589 : Cruise only Payment test with verification
        Given UAT url <SIID>
        When Open Browser & Launch the url
        Then Validate the <Title>

    Examples:
        | SIID    | Title                            |
        | 130386  | Odyssey UAT- USD: Cruise Planner |
        | 130385  | Odyssey UAT- AUD: Cruise Planner |