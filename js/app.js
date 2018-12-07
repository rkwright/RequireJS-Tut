define([
    "jquery",
    "formatter",
    "normalizator",
    "calculator",
    'domReady!'
], function($, formatter, normalizator, calculator)
{
    'use strict';

    /**
     * Calculates from to and puts result in a label
     */
    $(".calculate").click(function(event)
    {
        var fromCur = $(".from_cur").val();
        var toCur = $(".to_cur").val();
        var amountFrom = $(".amount_from").val();
        var amountTo = formatter.format(calculator.calculate(normalizator.getRate(fromCur, toCur), amountFrom));
        $(".amount_to").html(amountTo);
        return false;
    });

});