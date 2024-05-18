player.onTravelled(BOUNCE, function () {
    mobs.spawn(PIG, randpos(
    pos(0, 0, 0),
    pos(0, 0, 0)
    ))
})
player.onChat("run", function () {
    blocks.fill(
    WATER,
    pos(-20, -1, -20),
    pos(20, -1, 20),
    FillOperation.Replace
    )
})
