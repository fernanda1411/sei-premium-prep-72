/*We are going to complete a function that takes in two parameters, an object containing the report totals for various teams, and the string name of a team, and determines if the given team has surpassed their goal of 5 reports, and if they have, returns a specific string. Your function should use an if statement to determine if the team in question has surpassed their goal of 5 reports, and if they have, should return the string '{teamName} has surpassed goal with {number_of_reports_for_team} reports', where {teamName} has the value of the second argument the function is called on, and {number_of_reports_for_team} is the number of reports in the inputted object argument for {teamName}. Below are examples of the code running, assuming that you will have completed the described function: generateReportSummary.

var result1 = generateReportSummary({a_team: 12, b_team: 7, c_team: 0}, 'b_team');
console.log('should log "b_team has surpassed goal with 7 reports":', result1);

var result2 = generateReportSummary({blue: 18, red: 8, green: 12}, 'blue');
console.log('should log "blue has surpassed goal with 18 reports":', result2);

var result3 = generateReportSummary({gamma: 1, epsilon: 3, alpha: 4, bravo: 17}, 'alpha');
console.log('Should log undefined, because function returned nothing:', result3);*/

function generateReportSummary(reportTotals, teamName) {
    // if teamName's report total is greater than 5
      // return '{teamName} surpassed goal with {number_of_reports_for_team} reports'
      let teamTotal = reportTotals[teamName];
    if(teamTotal > 5){
        return teamName + ' has surpassed goal with ' + teamTotal + ' reports';
    }
}


var result1 = generateReportSummary({a_team: 12, b_team: 7, c_team: 0}, 'b_team');
console.log('should log "b_team has surpassed goal with 7 reports":', result1);

var result2 = generateReportSummary({blue: 18, red: 8, green: 12}, 'blue');
console.log('should log "blue has surpassed goal with 18 reports":', result2);

var result3 = generateReportSummary({gamma: 1, epsilon: 3, alpha: 4, bravo: 17}, 'alpha');
console.log('Should log undefined, because function returned nothing:', result3);
