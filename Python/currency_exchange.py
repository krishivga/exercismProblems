"""
    Basic Math operations using exchange rates and budgets.
"""
def exchange_money(budget, exchange_rate):
    return budget / exchange_rate # Dividing money by rate to find value after exchange.


def get_change(budget, exchanging_value):
    return budget - exchanging_value # Leftover that wasn't exchanged.


def get_value_of_bills(denomination, number_of_bills):
    return denomination * number_of_bills # Getting the total value of a number of bills


def get_number_of_bills(amount, denomination):
    return amount // denomination # Getting the number of bills possible for an exchange


def get_leftover_of_bills(amount, denomination):
    return  amount % denomination # Getting the number of bills leftover for an exchange

def exchangeable_value(budget, exchange_rate, spread, denomination):
    """
        We add the spread to the exchange rate to find the rate after fees. Next, we divide the budget by this rate to find the value of the exchange. 
        Finally, we find the leftover bills and subtract them from the exchangable money (which is the value of the exchange) in order to find the true value of the exchange.
    """
    exchangable_money = exchange_money(budget, exchange_rate + (exchange_rate * (spread/100)))
    return get_change(exchangable_money, get_leftover_of_bills(exchangable_money, denomination))
