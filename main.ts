let В = 0
player.onChat("Дім", function () {
    blocks.fill(
    PINK_GLAZED_TERRACOTTA,
    pos(-5, -1, -5),
    pos(8, 15, 5),
    FillOperation.Hollow
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-5, 5, -3),
    pos(8, 5, 5),
    FillOperation.Hollow
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-5, 10, -3),
    pos(8, 10, 5),
    FillOperation.Hollow
    )
    blocks.fill(
    AIR,
    pos(-5, 0, -3),
    pos(-5, 1, -4),
    FillOperation.Hollow
    )
    blocks.fill(
    PINK_STAINED_GLASS,
    pos(-3, 1, 5),
    pos(3, 14, 5),
    FillOperation.Hollow
    )
    В = -3
    for (let index = 0; index < 11; index++) {
        blocks.place(PRISMARINE_STAIRS, pos(В, 3 + В, -4))
        В += 1
    }
    blocks.place(BED, pos(7, 0, 4))
    blocks.place(BED, pos(7, 6, 4))
    blocks.place(BED, pos(7, 11, 4))
    mobs.spawn(VILLAGER, pos(0, 0, 4))
    mobs.spawn(VILLAGER, pos(0, 6, 4))
    mobs.spawn(VILLAGER, pos(0, 11, 4))
})
