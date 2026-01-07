import azure.functions as func

schedule_trigger_bp = func.Blueprint()

@schedule_trigger_bp.function_name(name="DailyUpdateDiscounts")
@schedule_trigger_bp.schedule(schedule="0 30 9 * * *", arg_name="mytimer", run_on_startup=False, use_monitor=True)
def daily_update_discounts(mytimer: func.TimerRequest) -> None:
    return